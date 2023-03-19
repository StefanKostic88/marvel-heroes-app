import CustomButton from "../../ui/CustomButton/CustomButton";
import {
  HeroCardStyled,
  HeroCardContentStyled,
  HeroCardImageContainerStyled,
  HeroCardHeadingStyled,
} from "../CardContainerStyles";

const HeroCard = ({ name, img, id, onAddHeroToTeam, onGetHeroInfo }) => {
  const getInfoHandler = (heroId) => {
    onGetHeroInfo(heroId);
  };

  const addHeroHandler = (heroId) => {
    onAddHeroToTeam(heroId);
  };

  return (
    <HeroCardStyled>
      <HeroCardImageContainerStyled>
        <HeroCardHeadingStyled>{name}</HeroCardHeadingStyled>
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
