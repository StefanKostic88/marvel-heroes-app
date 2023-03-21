import { CostumInputControls, HeroCard } from "../../components";
import {
  CardContainerStyled,
  CardContainerHeadingStyled,
  CardGridContainerStyled,
} from "./CardContainerStyles";
import { useEffect, useState, useContext } from "react";
import heroContext from "../../store/hero-data-contex/hero-data-contex";

const CardContainer = () => {
  const [heroSearchTearm, setHeroSearchTearm] = useState("");
  const {
    charactersArr,
    addHeroToTeamHandler,
    getHeroInfo,
    curentHeroCardsPage,
  } = useContext(heroContext);

  useEffect(() => {
    let searchTimer;
    if (heroSearchTearm === "") {
      curentHeroCardsPage(heroSearchTearm);
      clearTimeout(searchTimer);
      return;
    }
    searchTimer = setTimeout(() => {
      curentHeroCardsPage(heroSearchTearm);
    }, 1500);
    return () => {
      clearTimeout(searchTimer);
    };
  }, [heroSearchTearm]);

  if (!charactersArr) return <div>Loading...</div>;

  return (
    <CardContainerStyled>
      <CardContainerHeadingStyled>My Heroes</CardContainerHeadingStyled>
      <CostumInputControls
        onSubmit={(e) => {
          e.preventDefault();
        }}
        value={heroSearchTearm}
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setHeroSearchTearm(() => e.target.value);
        }}
      />

      <CardGridContainerStyled>
        {charactersArr.map((character) => (
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
