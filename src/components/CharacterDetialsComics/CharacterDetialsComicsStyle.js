import styled from "styled-components";

export const CharactersComicListStyled = styled.ul`
  display: flex;
  gap: 1.25rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`;

export const CharactersComicsListItemStyled = styled.div`
  width: 200px;
  height: 180px;
  position: relative;
  background: ${({ theme }) => theme.backgroundSecondaryLinearGradient};
  img {
    position: absolute;
    z-index: 1;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    top: 5px;
    left: 5px;
  }
`;

export const CharactersComicsListItemHeadingStyled = styled.h5`
  position: absolute;
  bottom: 0;
  z-index: 5;
  background-color: black;
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
