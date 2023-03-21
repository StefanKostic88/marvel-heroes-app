import { useContext } from "react";

import HeroContext from "../../store/hero-data-contex/hero-data-contex";

import {
  ModalStyled,
  ModalLinesStyled,
  ModalInnerContainerStyled,
  ModalImageContainerStyled,
  ModalDetailsStyled,
  ModalHedingPrimaryStyled,
  ModalParagraphStyled,
} from "./ModalStyles";
const Modal = () => {
  const { modalInfo } = useContext(HeroContext);
  console.log(modalInfo.img);
  return (
    <ModalStyled>
      <ModalLinesStyled />
      <ModalInnerContainerStyled />
      <ModalImageContainerStyled>
        <img src={modalInfo.img} alt={modalInfo.img} />
      </ModalImageContainerStyled>
      <ModalDetailsStyled>
        <ModalHedingPrimaryStyled>
          {/* Abomination (Emil Blonsky) */}
          {modalInfo.name}
        </ModalHedingPrimaryStyled>
        <ModalParagraphStyled>
          {modalInfo.description || "No description available"}
          {/* Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin
          working for the KGB, the Abomination gained his powers after receiving
          a dose of gamma radiation similar to that which transformed Bruce
          Banner into the incredible Hulk." */}
        </ModalParagraphStyled>
      </ModalDetailsStyled>
    </ModalStyled>
  );
};

export default Modal;
