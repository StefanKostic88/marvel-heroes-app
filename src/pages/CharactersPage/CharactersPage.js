import React, { useEffect, useState } from "react";
import { Switch, FormGroup, FormControlLabel } from "@mui/material";
import { MainContent } from "../../components";
import { useParams } from "react-router";
import { CharacterDetailsInnerContainerStyled } from "./CharacterPageStyles";
import {
  CharacterDetailsContent,
  CharacterDetialsComics,
} from "../../components";

import { getSingleCharacter } from "../../assets/helperFunctions/helperFunctions";

const CharactersPage = () => {
  const params = useParams();

  const [comics, setComics] = useState([]);
  const [heroPageDetails, setHeroPageDetails] = useState({});
  const [showComics, setShowComics] = useState(false);
  const getComics = async (id) => {
    const res = await fetch(
      ` https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=eb5dbae24a4e3ca8983252245373f194`
    );
    const {
      data: { results },
    } = await res.json();

    const comicsArr = results.map((comic) => {
      const obj = {
        comicTitle: comic.title,
        img: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        id: comic.id,
      };
      return obj;
    });
    // console.log(comicsArr);
    setComics(() => [...comicsArr]);
  };

  const getCharacterData = async (id) => {
    const hero = await getSingleCharacter(id);
    setHeroPageDetails(() => ({ ...hero }));
  };

  useEffect(() => {
    getComics(params.id);
    getCharacterData(params.id);
  }, []);
  console.log();

  // https://gateway.marvel.com:443/v1/public/characters/1010354/series?apikey=eb5dbae24a4e3ca8983252245373f194

  return (
    <MainContent>
      <CharacterDetailsInnerContainerStyled>
        <CharacterDetailsContent heroPageDetails={heroPageDetails} />
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                // defaultChecked
                // checked={showComics}
                value={showComics}
                onChange={() => {
                  console.log("Changed");
                  setShowComics((prev) => !prev);
                }}
              />
            }
            label="Show Comics"
          />
        </FormGroup>
        {showComics && <CharacterDetialsComics comics={comics} />}
      </CharacterDetailsInnerContainerStyled>
    </MainContent>
  );
};

export default CharactersPage;

// Avengers: The Initiative (2007 - 2010)
// http://i.annihil.us/u/prod/marvel/i/mg/5/a0/514a2ed3302f5.jpg
