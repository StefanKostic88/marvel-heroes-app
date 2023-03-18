import TeamsItems from "./TeamsItems/TeamsItems";
import {
  TeamContainerStyled,
  TeamContainerListStyled,
  TeamContainerHeadingStyled,
} from "./TeamContainerStyles";
const TeamsContainer = () => {
  return (
    <TeamContainerStyled>
      <TeamContainerHeadingStyled>My Team</TeamContainerHeadingStyled>
      <TeamContainerListStyled>
        <TeamsItems />
        <TeamsItems />
        <TeamsItems />
        <TeamsItems />
      </TeamContainerListStyled>
    </TeamContainerStyled>
  );
};

export default TeamsContainer;
