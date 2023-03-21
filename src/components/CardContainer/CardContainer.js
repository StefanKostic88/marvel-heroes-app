// import HeroCard from "./HeroCard/HeroCard";
import { CostumInputControls, HeroCard } from "../../components";
import {
  CardContainerStyled,
  CardContainerHeadingStyled,
  CardGridContainerStyled,
} from "./CardContainerStyles";
import { useEffect, useState, useContext } from "react";
import heroContext from "../../store/hero-data-contex/hero-data-contex";

import { getFilteredHeroesData } from "../../assets/helperFunctions/helperFunctions";

const CardContainer = () => {
  const [characters, setCharacters] = useState(null);
  const [filterCharacters, setFilterCharacters] = useState(null);

  const [heroSearchTearm, setHeroSearchTearm] = useState("");

  const { charactersArr, addHeroToTeamHandler, getHeroInfo } =
    useContext(heroContext);

  useEffect(() => {
    setCharacters(() => [...charactersArr]);
  }, [charactersArr]);

  useEffect(() => {
    if (!characters) return;
    setFilterCharacters(() => [...characters]);
  }, [characters]);

  const onChangeHandler = async (e) => {
    setHeroSearchTearm(() => e.target.value);

    const searchTearm = e.target.value.toLowerCase();

    const newArr = await getFilteredHeroesData(searchTearm);
    console.log(newArr);

    setFilterCharacters(() => [...newArr]);

    // setFilterCharacters(() =>
    //   characters.filter((hero) =>
    //     hero.name.toLowerCase().startsWith(searchTearm)
    //   )
    // );
  };

  const onSubmitHandler = () => {
    console.log(heroSearchTearm);
  };

  //komponenta na gore

  if (!filterCharacters) return <div>Loading...</div>;
  console.log(filterCharacters); // kad kliknes da ostane stanje
  console.log(filterCharacters.length);
  return (
    <CardContainerStyled>
      <CardContainerHeadingStyled>My Heroes</CardContainerHeadingStyled>
      <CostumInputControls
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();
        }}
        value={heroSearchTearm}
        type="text"
        placeholder="Search"
        onChange={onChangeHandler}
      />

      <CardGridContainerStyled>
        {filterCharacters.map((character) => (
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

// nameStartsWith
