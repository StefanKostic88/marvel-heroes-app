import styled from "styled-components";
import {
  animatePrimaryColors,
  animateSecondatyColors,
} from "../../assets/animations/animations";

export const CardContainerStyled = styled.div`
  flex: 5;
`;
export const CardContainerHeadingStyled = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
`;

export const CardGridContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  // gap: 2rem;
  row-gap: 6rem;
  margin: 10rem 0;
`;

export const HeroCardStyled = styled.figure`
  width: 280px;
  height: 250px;
  position: relative;
  background: #333;
  transition: 500ms;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 1px 5px 5px 1px ${({ theme }) => theme.backGroundSecondary};

  &:hover {
    height: 350px;
    box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.backGroundSecondary};
  }
`;

export const CardLinesStyled = styled.div`
  position: absolute;
  border-radius: 10px;
  inset: 0;
  background: #000;
  overflow: hidden;
  &:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 120px;
    background: ${({ theme }) => theme.backgroundPrimaryLinearGradient};
    animation: ${animatePrimaryColors} 4000ms linear infinite;
  }
  &:after {
    position: absolute;
    content: "";
    inset: 2px;
    background: #292929;
    border-radius: 10px;
  }
`;

export const HeroCardImageContainerStyled = styled.div`
  position: absolute;
  top: -50px;
  left: -30%;
  transform: translateX(35%);
  width: 170px;
  border-radius: 50%;

  height: 170px;
  background: #000;
  transition: 500ms;
  z-index: 10;
  overflow: hidden;
  ${HeroCardStyled}:hover & {
    left: 50%;
    // top: -80px;
    transform: translateX(-50%);
    width: 260px;
    height: 260px;
    border-radius: 10px;
  }
  &:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    width: 500px;
    height: 150px;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.backgroundPrimaryLinearGradient};
    animation: ${animateSecondatyColors} 6000ms linear infinite;

    border-radius: 10px;
  }

  &:after {
    position: absolute;
    content: "";
    background: #292929;
    inset: 3px;
    border-radius: 10px;
  }

  img {
    position: absolute;
    border-radius: 50%;
    z-index: 1;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    top: 5px;
    left: 5px;
    transition: 500ms;
    filter: grayscale(1);
    ${HeroCardStyled}:hover & {
      filter: grayscale(0);
      border-radius: 10px;
    }
  }
`;

export const HeroCardContentStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`;

export const CardDetailsStyled = styled.div`
  padding: 4rem 3.75rem 1rem;
  text-align: center;
  width: 100%;
  transition: 500ms;
  transform: translateY(65px);
  ${HeroCardStyled}:hover & {
    transform: translateY(0);
  }
`;

export const HeroCardHeadingStyled = styled.h3`
  font-size: 1.95rem;
  font-weight: 600;
  color: #45f3ff;
  line-height: 1.85rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 40px;
`;

export const ButtonGroupStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 1rem;
`;
