import styled, { keyframes } from "styled-components";

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
  box-shadow: inset 0 0 0 1px #5a5a5a;
  min-width: 30rem;
  padding: 5px 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: black;
`;

export const HeroCardContentStyled = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const HeroCardImageContainerStyled = styled.div`
  height: 30rem;
  margin-bottom: 2.5rem;
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
  }
`;

export const HeroCardHeadingStyled = styled.h3`
  padding: 1.5rem 0 2rem;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  // background-color: #00000080;
  min-height: 100%;
`;

export const Card = styled.figure`
  width: 280px;
  height: 250px;
  position: relative;
  background: #333;
  transition: 500ms;
  &:hover {
    // height: 450px;
    height: 350px;
  }
`;

export const Lines = styled.div`
  position: absolute;
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
    background: linear-gradient(
      transparent,
      #45f3ff,
      #45f3ff,
      #45f3ff,
      transparent
    );
    animation: animate 4000ms linear infinite;
  }
  &:after {
    position: absolute;
    content: "";
    inset: 2px;
    background: #292929;
  }
  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export const CardImageContainer = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 170px;
  height: 170px;
  background: #000;
  transition: 500ms;
  z-index: 10;
  overflow: hidden;
  ${Card}:hover & {
    width: 260px;
    height: 260px;
  }
  &:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    width: 500px;
    height: 150px;
    transform: translate(-50%, -50%);
    background: linear-gradient(
      transparent,
      #ff3c7b,
      #ff3c7b,
      #ff3c7b,
      transparent
    );
    animation: animate2 6000ms linear infinite;
  }

  &:after {
    position: absolute;
    content: "";
    background: #292929;
    inset: 3px;
  }
  @keyframes animate2 {
    0% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }

  img {
    position: absolute;
    z-index: 1;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    top: 5px;
    left: 5px;
    // filter: grayscale(1);
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`;

export const Details = styled.div`
  padding: 4rem 3.75rem 1rem;
  text-align: center;
  width: 100%;
  tansition: 500ms;
  // transform: translateY(60px);
  ${Card}:hover & {
  }
`;

export const CardHeading = styled.h3`
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

export const ButnCont = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 1rem;
  button {
    border: none;
    padding: 10px 30px;
    outline: none;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 500;
    background: #45f3ff;
    color: #222;
    curosr: pointer;
  }
`;
