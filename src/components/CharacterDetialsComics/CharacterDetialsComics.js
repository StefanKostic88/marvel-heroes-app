import React from "react";
import {
  CharactersComicListStyled,
  CharactersComicsListItemStyled,
  CharactersComicsListItemHeadingStyled,
} from "./CharacterDetialsComicsStyle";

const CharacterDetialsComics = ({ comics }) => {
  return (
    <CharactersComicListStyled>
      {comics.map(({ comicTitle, img, id }) => (
        <li key={id}>
          <CharactersComicsListItemStyled>
            <CharactersComicsListItemHeadingStyled>
              {comicTitle}
            </CharactersComicsListItemHeadingStyled>
            <img src={img} />
          </CharactersComicsListItemStyled>
        </li>
      ))}
    </CharactersComicListStyled>
  );
};

export default CharacterDetialsComics;
