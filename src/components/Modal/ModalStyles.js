import styled from "styled-components";

export const ModalStyled = styled.div`
  // width: 60%;
  // height: 70%;
  // color: #fff;

  width: 600px;
  height: 80%;
  background: #333;

  ///
  box-shadow: 0 0 3px 1px #45f3ff;
  border-radius: 50px;
  position: fixed;
  inset: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
`;

export const ModalLinesStyled = styled.div`
  position: absolute;
  inset: 0;
  background: #000;

  overflow: hidden;
  &:before {
    position: absolute;
    content: "";
    top: 50%;
    left: -100%;
    transform: translateY(-50%);
    width: 600px;
    height: 120px;
    height: 110%;
    width: 110%;
    left: 0;
    transform: translateY(0);

    background: linear-gradient(
      transparent,
      #45f3ff,
      #45f3ff,
      #45f3ff,
      transparent
    );
    // animation: animate 1500ms linear forwards;

    // @keyframes animate {
    //   0% {
    //     // transform: translate(-50%, -50%) rotate(0deg);
    //     left: -100%;
    //     // transform: translateY(-50%);
    //   }
    //   100% {
    //     // transform: translate(-50%, -50%) rotate(360deg);

    //   }
  }
`;

export const ModalInnerContainerStyled = styled.div`
  position: absolute;
  inset: 3px;
  background: #000;
`;

export const ModalImageContainerStyled = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;

  transform: translateX(-50%);
  width: 260px;
  height: 260px;
  background: #000;
  transition: 500ms;
  z-index: 10;
  overflow: hidden;
  // ${ModalStyled}:hover & {
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: 260px;
  //   height: 260px;
  // }
  &:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    width: 500px;
    height: 150px;
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%) rotate(180deg);
    background: linear-gradient(
      transparent,
      #ff3c7b,
      #ff3c7b,
      #ff3c7b,
      transparent
    );
    // animation: animate2 1500ms linear;
  }

  &:after {
    position: absolute;
    content: "";
    background: #292929;
    inset: 3px;
  }
  // @keyframes animate2 {
  //   0% {
  //     transform: translate(-50%, -50%) rotate(0deg);
  //   }
  //   100% {
  //     transform: translate(-50%, -50%) rotate(180deg);
  //   }
  // }

  img {
    position: absolute;
    z-index: 1;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    top: 5px;
    left: 5px;
    transition: 500ms;
  }
`;

export const ModalDetailsStyled = styled.div`
  position: absolute;
  padding: 3.5rem;
  width: 100%;
  height: 70%;
  bottom: 40%;
  // top: 15%;
  gap: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.85);
  // z-index: 10;
`;

export const ModalHedingPrimaryStyled = styled.h2`
  font-size: 2.8rem;
  letter-spacing: 1px;
  line-height: 1.2;
  width: 10ch;
  text-align: center;
`;

export const ModalParagraphStyled = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  text-align: center;
`;

export const ComicsContainerStyled = styled.div`
  position: absolute;
  bottom: 0.5%;
  // left: 0.5%;
  right: 0.5%;
  // background: red;

  padding: 1rem;
  display: flex;
  gap: 0.5rem;
`;
