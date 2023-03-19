import React from "react";

const HeroContext = React.createContext({
  charactersArr: [],
  heroTeamArr: [],
  maxHeroTeamCap: "",
  addHeroToTeamHandler: () => {},
  removeHeroFromTeamHandler: () => {},
  getHeroInfo: () => {},
});

export default HeroContext;
