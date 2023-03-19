import styled from "styled-components";

export const CardContainerStyled = styled.div`
  flex: 5;
`;
export const CardContainerHeadingStyled = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
`;

export const CardGridContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 2rem;
`;

export const HeroCardStyled = styled.figure`
  box-shadow: inset 0 0 0 1px #5a5a5a;
  min-width: 30rem;
  padding: 5px 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: black;
`;

export const HeroCardContentStyled = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const HeroCardImageContainerStyled = styled.div`
  height: 30rem;
  margin-bottom: 2.5rem;
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
  }
`;

export const HeroCardHeadingStyled = styled.h3`
  padding: 1.5rem 0 2rem;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  background-color: #00000080;
  min-height: 100%;
`;
