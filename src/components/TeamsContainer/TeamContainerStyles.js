import styled from "styled-components";

export const TeamContainerStyled = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TeamContainerListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const TeamContainerHeadingStyled = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
`;

export const TeamsItemsStlyed = styled.li`
  gap: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  background: black;
  cursor: pointer;
  border-top-left-radius: 3.5rem;
  border-bottom-left-radius: 3.5rem;
`;

export const TeamsItemsCardStlyed = styled.figure`
  display: flex;
  gap: 1rem;
  align-content: center;
`;

export const TeamsItemCardImgContainerStyled = styled.div`
  height: 6.5rem;
  width: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.backgroundSecondaryLinearGradient};
  border-radius: 50%;

  svg {
    width: 4rem;
    height: 4rem;
    fill: black;
  }
  img {
    object-fit: cover;
    width: 90%;
    height: 90%;
    object-position: center;
    border-radius: 50%;
  }
`;

export const TeamsItemCardHeadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
