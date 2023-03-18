import {
  HeaderStyled,
  HeaderInnerContainerStyled,
  NavListStyled,
} from "./HeaderStyles";
const Header = () => {
  return (
    <HeaderStyled>
      <HeaderInnerContainerStyled>
        <NavListStyled>
          <li>
            <h4>Character</h4>
          </li>
          <li>
            <h4>Comics</h4>
          </li>
          <li>
            <h4>Comics</h4>
          </li>
        </NavListStyled>
      </HeaderInnerContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
