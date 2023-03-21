import {
  HeroCardStyled,
  HeroCardContentStyled,
  HeroCardImageContainerStyled,
  HeroCardHeadingStyled,
  CardDetailsStyled,
  CardLinesStyled,
  ButtonGroupStyled,
} from "../CardContainerStyles";

const HeroCard = ({ name, img, id, onAddHeroToTeam, onGetHeroInfo }) => {
  const getInfoHandler = (heroId) => {
    console.log(heroId);
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
            <button
              onClick={() => {
                getInfoHandler(id);
              }}
            >
              Info
            </button>
            <button
              onClick={() => {
                console.log(id);
                addHeroHandler(id);
              }}
            >
              Add
            </button>
          </ButtonGroupStyled>
        </CardDetailsStyled>
      </HeroCardContentStyled>
    </HeroCardStyled>
  );
};

export default HeroCard;

{
  /* <HeroCardStyled>
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
    </HeroCardStyled> */
}
