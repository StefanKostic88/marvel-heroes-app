import styled from "styled-components";

export const MainContentOterStyled = styled.div`
  background-image: url(https://cdn.wallpapersafari.com/23/69/hi3v6Y.jpg);
  background-size: cover;
  background-position: center;
  background-color: rgba(0 0 0 0.75);
  position: relative;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    zindex: 1;
    background: ${({ theme }) => theme.backGroundOverlayLinear};
    background: ${({ theme }) => theme.backgroundLinear};
  }
`;
export const MainContentInnerStyled = styled.main`
  min-height: calc(100vh - 16vh);
  padding: 8vh 0;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  z-index: 2;
  position: relative;
`;
