import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import {
  TeamsItemsStlyed,
  TeamsItemsCardStlyed,
  TeamsItemCardImgContainerStyled,
  TeamsItemCardHeadingStyled,
} from "../TeamContainerStyles";

const TeamsItems = ({ name, id, img, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <TeamsItemsStlyed
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
    >
      <TeamsItemsCardStlyed>
        <TeamsItemCardImgContainerStyled>
          {isHovering ? (
            <MdDeleteForever
              onClick={() => {
                console.log("deleted item");
              }}
            />
          ) : (
            <img src={img} alt={img} />
          )}
        </TeamsItemCardImgContainerStyled>
        <TeamsItemCardHeadingStyled>
          <h4>{name}</h4>
        </TeamsItemCardHeadingStyled>
      </TeamsItemsCardStlyed>
    </TeamsItemsStlyed>
  );
};

export default TeamsItems;
