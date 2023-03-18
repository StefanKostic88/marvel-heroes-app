import HeroCard from "./HeroCard/HeroCard";
import {
  CardContainerStyled,
  CardContainerHeadingStyled,
  CardGridContainerStyled,
} from "./CardContainerStyles";
import { useEffect, useState } from "react";

import { getAllCharacters } from "../../assets/helperFunctions/helperFunctions";
const CardContainer = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllCharacters();

      setCharacters(() => [...data]);
    };
    getData();
  }, []);

  console.log(characters);
  return (
    <CardContainerStyled>
      <CardContainerHeadingStyled>My Heroes</CardContainerHeadingStyled>
      <CardGridContainerStyled>
        {characters.map((character) => (
          <HeroCard {...character} key={character.id} />
        ))}
      </CardGridContainerStyled>
    </CardContainerStyled>
  );
};

export default CardContainer;
