import { useContext } from "react";
import { useNavigate } from "react-router";
import { CustomButton } from "../../components";

import HeroContext from "../../store/hero-data-contex/hero-data-contex";

import {
  ModalStyled,
  ModalLinesStyled,
  ModalInnerContainerStyled,
  ModalImageContainerStyled,
  ModalDetailsStyled,
  ModalHedingPrimaryStyled,
  ModalParagraphStyled,
  ComicsContainerStyled,
  costumS,
} from "./ModalStyles";
const Modal = () => {
  const navigate = useNavigate();
  const { modalInfo, onCloseModalWindow } = useContext(HeroContext);

  if (!modalInfo) return; // loader

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
      <ComicsContainerStyled>
        <CustomButton
          onClick={() => {
            onCloseModalWindow();
          }}
        >
          Close
        </CustomButton>
        <CustomButton onClick={() => navigate(`/characters/${modalInfo.id}`)}>
          View More
        </CustomButton>
      </ComicsContainerStyled>
    </ModalStyled>
  );
};

export default Modal;
