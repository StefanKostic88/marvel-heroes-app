import styled from "styled-components";

export const CharacterDetialsInfoUpperStyled = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 3rem;
`;

export const CharacterDetialsImgContainerStyled = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background: linear-gradient(
    #45f3ff,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    #45f3ff,
    #45f3ff,
    #45f3ff
  );
  img {
    position: absolute;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    top: 5px;
    left: 5px;
  }
`;

export const CharactersDetailsButtonContacinerStyled = styled.div`
  flex: 1;
  // background: red;
  justify-self: flex-end;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 2rem;
  padding: 0 8rem;
`;

export const CharacterDetialsComicsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    letter-spacing: 1px;
    text-transform: uppercase;
    line-heigth: 1.2;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: 1px;
  }
`;
