import { MainContent, CardContainer, TeamsContainer } from "../../components";
import { HomePageInnerStyled } from "./HomePageStyles";
import HeroContext from "../../store/hero-data-contex/hero-data-contex";
import { useEffect, useState } from "react";
import {
  getAllCharacters,
  getFilteredHeroesData,
} from "../../assets/helperFunctions/helperFunctions";

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
  {
    name: "Test",
    id: 1014,
    img: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg",
  },
  {
    name: "Test2",
    id: 101411,
    img: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg",
  },
];

// const getCharacterData = async (id) => {
//   const res = fetch(
//     `gateway.marvel.com:443/v1/public/characters/${id}?apikey=eb5dbae24a4e3ca8983252245373f194`
//   );
//   const data = await res.json();
//   console.log(data);
// };

const HomePage = () => {
  const [heros, setHeros] = useState([]);
  const [heroTeam, setHeroTeam] = useState([]);
  const [heroInfo, setHeroInfo] = useState({});
  const [maxCapMessage, setMaxCapMessage] = useState("Select Team");

  const getAllHeroesData = async () => {
    const allHeroesData = await getAllCharacters();
    setHeros(() => [...allHeroesData]);
  };

  useEffect(() => {
    //fetch all heroes
    setHeros(() => [...dataArr]);
    // get team from local storage
    // setHeroTeam(() => [...dataArr]);

    // getAllHeroesData();
  }, []);
  useEffect(() => {
    if (heroTeam.length === 5) {
      setMaxCapMessage(() => "Cap Reached");
    } else {
      setMaxCapMessage(() => "Select Team");
    }
  }, [heroTeam.length]);

  return (
    <MainContent>
      <HeroContext.Provider
        value={{
          charactersArr: [...heros],
          heroTeamArr: [...heroTeam],
          maxHeroTeamCap: maxCapMessage,
          //add new object to existing array, and update array
          addHeroToTeamHandler: (id) => {
            const selectedHero = heros.find((hero) => hero.id === id);
            const heroIsPresent = heroTeam.find((hero) => hero.id === id);

            if (heroTeam.length >= 5) return;

            if (!heroIsPresent) {
              setHeroTeam((prev) => [...prev, selectedHero]);
              return;
            }

            //set the local storage
          },
          //filter all objects except obj with this id
          removeHeroFromTeamHandler: (id) => {
            const filteredHeroes = heroTeam.filter((el) => el.id !== id);
            setHeroTeam(() => [...filteredHeroes]);
            //set local storage
          },
          getHeroInfo: (id) => {
            const selectedHero = heros.find((hero) => hero.id === id);
            setHeroInfo(() => ({ ...selectedHero }));
          },
          curentHeroCardsPage: async (searchTearm) => {
            if (!searchTearm) {
              getAllHeroesData();
              return;
            }
            const newArr = await getFilteredHeroesData(searchTearm);
            setHeros(() => [...newArr]);
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
