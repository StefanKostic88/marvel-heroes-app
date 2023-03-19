import { useContext } from "react";
import HeroContext from "../../store/hero-data-contex/hero-data-contex";
import TeamsItems from "./TeamsItems/TeamsItems";
import {
  TeamContainerStyled,
  TeamContainerListStyled,
  TeamContainerHeadingStyled,
} from "./TeamContainerStyles";

const TeamsContainer = () => {
  const { heroTeamArr, maxHeroTeamCap, removeHeroFromTeamHandler } =
    useContext(HeroContext);

  return (
    <TeamContainerStyled>
      <TeamContainerHeadingStyled>{maxHeroTeamCap}</TeamContainerHeadingStyled>
      <TeamContainerListStyled>
        {heroTeamArr.map((character) => (
          <TeamsItems
            key={character.id}
            {...character}
            onClick={() => {
              removeHeroFromTeamHandler(character.id);
            }}
          />
        ))}
      </TeamContainerListStyled>
    </TeamContainerStyled>
  );
};

export default TeamsContainer;
