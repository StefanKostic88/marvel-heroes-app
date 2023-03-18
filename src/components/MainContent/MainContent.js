import {
  MainContentOterStyled,
  MainContentInnerStyled,
} from "./MainContentStyles";

const MainContent = ({ children }) => {
  return (
    <MainContentOterStyled>
      <MainContentInnerStyled>{children}</MainContentInnerStyled>
    </MainContentOterStyled>
  );
};
export default MainContent;
