import CustomButton from "../../ui/CustomButton/CustomButton";
import {
  HeroCardStyled,
  HeroCardContentStyled,
  HeroCardImageContainerStyled,
  HeroCardHeadingStyled,
} from "../CardContainerStyles";

const HeroCard = ({ name, img }) => {
  return (
    <HeroCardStyled>
      <HeroCardHeadingStyled>{name}</HeroCardHeadingStyled>
      <HeroCardImageContainerStyled>
        <img src={img} />
      </HeroCardImageContainerStyled>
      <HeroCardContentStyled>
        <CustomButton>Info</CustomButton>
        <CustomButton>Add</CustomButton>
      </HeroCardContentStyled>
    </HeroCardStyled>
  );
};

export default HeroCard;
