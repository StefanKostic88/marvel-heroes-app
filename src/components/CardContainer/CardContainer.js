import HeroCard from "./HeroCard/HeroCard";
import {
  CardContainerStyled,
  CardContainerHeadingStyled,
  CardGridContainerStyled,
} from "./CardContainerStyles";
import { useEffect, useState, useContext } from "react";
import heroContext from "../../store/hero-data-contex/hero-data-contex";

const CardContainer = () => {
  const [characters, setCharacters] = useState(null);
  const { charactersArr, addHeroToTeamHandler, getHeroInfo } =
    useContext(heroContext);

  useEffect(() => {
    setCharacters(() => [...charactersArr]);
  }, [charactersArr]);

  if (!characters) return <div>Loading...</div>;

  return (
    <CardContainerStyled>
      <CardContainerHeadingStyled>My Heroes</CardContainerHeadingStyled>
      <CardGridContainerStyled>
        {characters.map((character) => (
          <HeroCard
            {...character}
            key={character.id}
            onAddHeroToTeam={addHeroToTeamHandler}
            onGetHeroInfo={getHeroInfo}
          />
        ))}
      </CardGridContainerStyled>
    </CardContainerStyled>
  );
};

export default CardContainer;
