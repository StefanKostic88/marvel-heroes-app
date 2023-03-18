import TeamsItems from "./TeamsItems/TeamsItems";
import {
  TeamContainerStyled,
  TeamContainerListStyled,
  TeamContainerHeadingStyled,
} from "./TeamContainerStyles";

import HeroContext from "../../store/hero-data-contex/hero-data-contex";
import { useContext } from "react";

const TeamsContainer = () => {
  const { heroTeamArr, removeHeroFromTeamHandler } = useContext(HeroContext);
  console.log(heroTeamArr, removeHeroFromTeamHandler);
  return (
    <TeamContainerStyled>
      <TeamContainerHeadingStyled>My Team</TeamContainerHeadingStyled>
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
        {/* <TeamsItems />
        <TeamsItems />
        <TeamsItems /> */}
      </TeamContainerListStyled>
    </TeamContainerStyled>
  );
};

export default TeamsContainer;
