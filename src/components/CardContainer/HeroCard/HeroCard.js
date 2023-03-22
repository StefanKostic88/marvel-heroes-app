import {
  HeroCardStyled,
  HeroCardContentStyled,
  HeroCardImageContainerStyled,
  HeroCardHeadingStyled,
  CardDetailsStyled,
  CardLinesStyled,
  ButtonGroupStyled,
} from "../CardContainerStyles";
import { CardButtonsStyled } from "../../ui/UiStyles/UiStyles";

const HeroCard = ({ name, img, id, onAddHeroToTeam, onGetHeroInfo }) => {
  const getInfoHandler = (heroId) => {
    onGetHeroInfo(heroId);
  };

  const addHeroHandler = (heroId) => {
    onAddHeroToTeam(heroId);
  };

  return (
    <HeroCardStyled>
      <CardLinesStyled />
      <HeroCardImageContainerStyled>
        <img src={img} alt={img} />
      </HeroCardImageContainerStyled>
      <HeroCardContentStyled>
        <CardDetailsStyled>
          <HeroCardHeadingStyled>{name}</HeroCardHeadingStyled>
          <ButtonGroupStyled>
            <CardButtonsStyled
              onClick={() => {
                getInfoHandler(id);
              }}
            >
              Info
            </CardButtonsStyled>
            <CardButtonsStyled
              onClick={() => {
                addHeroHandler(id);
              }}
            >
              Add
            </CardButtonsStyled>
          </ButtonGroupStyled>
        </CardDetailsStyled>
      </HeroCardContentStyled>
    </HeroCardStyled>
  );
};

export default HeroCard;
