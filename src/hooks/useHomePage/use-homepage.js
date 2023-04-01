import { useState, useEffect } from "react";

const x = localStorage.getItem("heroTeam");
const data = JSON.parse(x);

const useHomePage = (fetchAllHeroes, fetchSingleHero) => {
  const [heros, setHeros] = useState([]);
  const [heroTeam, setHeroTeam] = useState(data === null ? [] : [...data]);
  const [heroInfo, setHeroInfo] = useState(null);
  const [maxCapMessage, setMaxCapMessage] = useState("Select Team");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const getCharacterData = async (id) => {
    const heroData = await fetchSingleHero(id);
    setHeroInfo(() => ({ ...heroData }));
  };

  const getAllHeroesData = async () => {
    const allHeroesData = await fetchAllHeroes();
    setHeros(() => [...allHeroesData]);
  };

  const closeModalWindow = () => {
    setModalIsVisible(() => false);
    setHeroInfo(() => null);
  };
  useEffect(() => {
    getAllHeroesData();
  }, []);

  useEffect(() => {
    if (heroTeam.length === 5) {
      setMaxCapMessage(() => "Cap Reached");
    } else {
      setMaxCapMessage(() => "Select Team");
      localStorage.setItem("heroTeam", JSON.stringify(heroTeam));
    }
  }, [heroTeam.length]);

  return {
    heros,
    setHeros,
    heroTeam,
    setHeroTeam,
    heroInfo,
    setHeroInfo,
    maxCapMessage,
    setMaxCapMessage,
    modalIsVisible,
    setModalIsVisible,
    getAllHeroesData,
    getCharacterData,
    closeModalWindow,
  };
};

export default useHomePage;
