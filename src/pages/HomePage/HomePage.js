import { MainContent, CardContainer, TeamsContainer } from "../../components";
import { HomePageInnerStyled } from "./HomePageStyles";
const HomePage = () => {
  return (
    <MainContent>
      <HomePageInnerStyled>
        <CardContainer />
        <TeamsContainer />
      </HomePageInnerStyled>
    </MainContent>
  );
};

export default HomePage;
