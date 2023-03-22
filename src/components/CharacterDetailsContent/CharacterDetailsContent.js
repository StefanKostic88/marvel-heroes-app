import React from "react";

import { useNavigate } from "react-router";

import {
  CharacterDetialsImgContainerStyled,
  CharacterDetialsInfoUpperStyled,
  CharactersDetailsButtonContacinerStyled,
  CharacterDetialsComicsStyled,
} from "./CharacterDetailsStyle";

import { CustomButton } from "../../components";

const CharacterDetailsContent = ({
  heroPageDetails: { description, name, img, id },
}) => {
  const navigate = useNavigate();

  const desContent = description
    ? description
    : "No description available for this hero, for more information go to wikipedia or something";
  return (
    <CharacterDetialsInfoUpperStyled>
      <CharacterDetialsImgContainerStyled>
        <img src={img} alt={img} />
      </CharacterDetialsImgContainerStyled>
      <CharacterDetialsComicsStyled>
        <h2>{name}</h2>
        <p>{desContent}</p>
        <CharactersDetailsButtonContacinerStyled>
          <CustomButton
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </CustomButton>
        </CharactersDetailsButtonContacinerStyled>
      </CharacterDetialsComicsStyled>
    </CharacterDetialsInfoUpperStyled>
  );
};

export default CharacterDetailsContent;

// CharacterDetialsImgContainerStyled,
// CharacterDetialsInfoUpperStyled,
// CharactersDetailsButtonContacinerStyled,
