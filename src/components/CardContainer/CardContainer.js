import HeroCard from "./HeroCard/HeroCard";
import {
  CardContainerStyled,
  CardContainerHeadingStyled,
  CardGridContainerStyled,
} from "./CardContainerStyles";
import { useEffect, useState, useContext } from "react";
// import { getAllCharacters } from "../../assets/helperFunctions/helperFunctions";
import heroContext from "../../store/hero-data-contex/hero-data-contex";

// const dataArr = [
//   {
//     name: "3-D Man",
//     id: 1011334,
//     img: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
//   },
//   {
//     name: "Abomination (Emil Blonsky)",
//     id: 1009146,
//     img: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg",
//   },
//   {
//     name: "Adam Warlock",
//     id: 1010354,
//     img: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg",
//   },
// ];

const CardContainer = () => {
  const [characters, setCharacters] = useState(null);
  const { charactersArr, addHeroToTeamHandler } = useContext(heroContext);
  console.log(charactersArr, addHeroToTeamHandler);

  useEffect(() => {
    // const getData = async () => {
    //   const data = await getAllCharacters();

    //   setCharacters(() => [...charactersArr]);
    // };
    // getData();
    setCharacters(() => [...charactersArr]);
  }, [charactersArr]);

  // console.log(characters);
  if (!characters) return <div>Loading...</div>;
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
