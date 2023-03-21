import CustomButton from "../../ui/CustomButton/CustomButton";
import {
  HeroCardStyled,
  HeroCardContentStyled,
  HeroCardImageContainerStyled,
  HeroCardHeadingStyled,
  ////
  Card,
  CardImageContainer,
  CardHeading,
  Lines,
  Content,
  Details,
  ButnCont,
} from "../CardContainerStyles";

const HeroCard = ({ name, img, id, onAddHeroToTeam, onGetHeroInfo }) => {
  console.log(id);
  const getInfoHandler = (heroId) => {
    onGetHeroInfo(heroId);
  };

  const addHeroHandler = (heroId) => {
    onAddHeroToTeam(heroId);
  };

  return (
    <Card>
      <Lines></Lines>
      <CardImageContainer>
        <img src={img} alt={img} />
      </CardImageContainer>
      <Content>
        <Details>
          <CardHeading>{name}</CardHeading>
          <ButnCont>
            <button>Info</button>
            <button
              onClick={() => {
                console.log(id);
                addHeroHandler(id);
              }}
            >
              Add
            </button>
          </ButnCont>
        </Details>
      </Content>
    </Card>
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
