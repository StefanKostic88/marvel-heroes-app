import { MainContent, CardContainer, TeamsContainer } from "../../components";
import { HomePageInnerStyled } from "./HomePageStyles";
import HeroContext from "../../store/hero-data-contex/hero-data-contex";
import { useEffect, useState } from "react";

const dataArr = [
  {
    name: "3-D Man",
    id: 1011334,
    img: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
  },
  {
    name: "Abomination (Emil Blonsky)",
    id: 1009146,
    img: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg",
  },
  {
    name: "Adam Warlock",
    id: 1010354,
    img: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg",
  },
];

const HomePage = () => {
  const [heros, setHeros] = useState([]);
  const [heroTeam, setHeroTeam] = useState([]);
  const [heroInfo, setHeroInfo] = useState({});
  console.log(heroInfo);
  useEffect(() => {
    setHeros(() => [...dataArr]);
    setHeroTeam(() => [...dataArr]);
  }, []);

  console.log(heroInfo);
  if (!heros) return <div>Loading</div>;
  return (
    <MainContent>
      <HeroContext.Provider
        value={{
          charactersArr: [...heros],
          heroTeamArr: [...heroTeam],
          addHeroToTeamHandler: (id) => {
            //add new object to existing array, and update array
            console.log(id);
            const selectedHero = heros.find((hero) => hero.id === id);
            console.log(selectedHero);
            setHeroTeam((prev) => [...prev, selectedHero]);
            //set the local storage
          },
          removeHeroFromTeamHandler: (id) => {
            //filter all objects except obj with this id
            const newVal = heroTeam.filter((el) => el.id !== id);
            setHeroTeam(() => [...newVal]);
          },
          getHeroInfo: (id) => {
            const selectedHero = heros.find((hero) => hero.id === id);
            setHeroInfo(() => ({ ...selectedHero }));
          },
        }}
      >
        <HomePageInnerStyled>
          <CardContainer />
          <TeamsContainer />
        </HomePageInnerStyled>
      </HeroContext.Provider>
    </MainContent>
  );
};

export default HomePage;
