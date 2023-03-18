import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import {
  TeamsItemsStlyed,
  TeamsItemsCardStlyed,
  TeamsItemCardImgContainerStyled,
  TeamsItemCardHeadingStyled,
} from "../TeamContainerStyles";

const TeamsItems = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <TeamsItemsStlyed onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <TeamsItemsCardStlyed>
        <TeamsItemCardImgContainerStyled>
          {isHovering ? (
            <MdDeleteForever
              onClick={() => {
                console.log("deleted item");
              }}
            />
          ) : (
            <img src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" />
          )}
        </TeamsItemCardImgContainerStyled>
        <TeamsItemCardHeadingStyled>
          <h4>Some Hero</h4>
        </TeamsItemCardHeadingStyled>
      </TeamsItemsCardStlyed>
    </TeamsItemsStlyed>
  );
};

export default TeamsItems;
