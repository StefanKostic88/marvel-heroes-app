import React from "react";

const HeroContext = React.createContext({
  charactersArr: [],
  heroTeamArr: [],
  addHeroToTeamHandler: () => {},
  removeHeroFromTeamHandler: () => {},
  getHeroInfo: () => {},
});

export default HeroContext;
