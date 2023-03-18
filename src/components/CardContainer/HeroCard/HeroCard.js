import CustomButton from "../../ui/CustomButton/CustomButton";
import {
  HeroCardStyled,
  HeroCardContentStyled,
  HeroCardImageContainerStyled,
  HeroCardHeadingStyled,
} from "../CardContainerStyles";

import { useContext } from "react";
import HeroContext from "../../../store/hero-data-contex/hero-data-contex";

const HeroCard = ({ name, img, id }) => {
  const { addHeroToTeamHandler, getHeroInfo } = useContext(HeroContext);
  const getInfoHandler = (id) => {
    // console.log(id);
    getHeroInfo(id);
    //get individual Hero Info
  };

  const addHeroHandler = (id) => {
    // console.log(id);
    addHeroToTeamHandler(id);
    //Add hero To Teams Component
  };

  return (
    <HeroCardStyled>
      <HeroCardHeadingStyled>{name}</HeroCardHeadingStyled>
      <HeroCardImageContainerStyled>
        <img src={img} alt={img} />
      </HeroCardImageContainerStyled>
      <HeroCardContentStyled>
        <CustomButton
          onClick={() => {
            getInfoHandler(id);
          }}
        >
          Info
        </CustomButton>
        <CustomButton
          onClick={() => {
            addHeroHandler(id);
          }}
        >
          Add
        </CustomButton>
      </HeroCardContentStyled>
    </HeroCardStyled>
  );
};

export default HeroCard;
