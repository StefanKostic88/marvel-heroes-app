import { MainContent, CardContainer, TeamsContainer } from "../../components";
const HomePage = () => {
  return (
    <MainContent>
      <div
        style={{
          display: "flex",
          padding: "30px",
          background: "aqua",
          gap: "40px",
        }}
      >
        <CardContainer />
        <TeamsContainer />
      </div>
    </MainContent>
  );
};

export default HomePage;
