import {
  MainContent,
  CardContainer,
  TeamsContainer,
  Overlay,
  Modal,
} from "../../components";
import { HomePageInnerStyled } from "./HomePageStyles";
import HeroContext from "../../store/hero-data-contex/hero-data-contex";
import {
  getAllCharacters,
  getFilteredHeroesData,
  getSingleCharacter,
} from "../../assets/helperFunctions/helperFunctions";

import { useHomePage } from "../../hooks";

const HomePage = () => {
  const {
    heros,
    setHeros,
    heroTeam,
    setHeroTeam,
    heroInfo,
    maxCapMessage,
    modalIsVisible,
    setModalIsVisible,
    getAllHeroesData,
    getCharacterData,
    closeModalWindow,
  } = useHomePage(getAllCharacters, getSingleCharacter);

  const contextValueObject = {
    charactersArr: [...heros],
    heroTeamArr: [...heroTeam],
    maxHeroTeamCap: maxCapMessage,

    addHeroToTeamHandler: (id) => {
      const selectedHero = heros.find((hero) => hero.id === id);
      const heroIsPresent = heroTeam.find((hero) => hero.id === id);

      if (heroTeam.length === 5) return;
      console.log(selectedHero);
      if (!heroIsPresent) {
        setHeroTeam((prev) => {
          localStorage.setItem(
            "heroTeam",
            JSON.stringify([...prev, selectedHero])
          );

          return [...prev, selectedHero];
        });

        return;
      }
    },

    removeHeroFromTeamHandler: (id) => {
      const filteredHeroes = heroTeam.filter((el) => el.id !== id);
      setHeroTeam(() => [...filteredHeroes]);
    },
    getHeroInfo: (id) => {
      getCharacterData(id);

      setModalIsVisible(() => true);
    },

    modalInfo: heroInfo,
    curentHeroCardsPage: async (searchTearm) => {
      if (!searchTearm) {
        getAllHeroesData();
        return;
      }
      const newArr = await getFilteredHeroesData(searchTearm);
      setHeros(() => [...newArr]);
    },
    onCloseModalWindow: closeModalWindow,
  };

  return (
    <HeroContext.Provider value={contextValueObject}>
      {modalIsVisible && (
        <>
          <Overlay />
          <Modal />
        </>
      )}
      <MainContent>
        <HomePageInnerStyled>
          <CardContainer />
          <TeamsContainer />
        </HomePageInnerStyled>
      </MainContent>
    </HeroContext.Provider>
  );
};

export default HomePage;

// const [heros, setHeros] = useState([]);
// const [heroTeam, setHeroTeam] = useState([]);
// const [heroInfo, setHeroInfo] = useState(null);
// const [maxCapMessage, setMaxCapMessage] = useState("Select Team");
// const [modalIsVisible, setModalIsVisible] = useState(false);

// console.log(x);

// const getCharacterData = async (id) => {
//   const heroData = await getSingleCharacter(id);
//   setHeroInfo(() => ({ ...heroData }));
// };

// const getAllHeroesData = async () => {
//   const allHeroesData = await getAllCharacters();
//   setHeros(() => [...allHeroesData]);
// };

// const closeModalWindow = () => {
//   setModalIsVisible(() => false);
//   setHeroInfo(() => null);
// };

// useEffect(() => {
//   getAllHeroesData();
// }, []);
// useEffect(() => {
//   if (heroTeam.length === 5) {
//     setMaxCapMessage(() => "Cap Reached");
//   } else {
//     setMaxCapMessage(() => "Select Team");
//   }
// }, [heroTeam.length]);

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
//   {
//     name: "Test",
//     id: 1014,
//     img: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg",
//   },
//   {
//     name: "Test2",
//     id: 101411,
//     img: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg",
//   },
// ];
