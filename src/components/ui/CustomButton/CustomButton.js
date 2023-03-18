import { CostumButtonStyled } from "../UiStyles/UiStyles";
const CustomButton = ({ children, onClick }) => {
  return <CostumButtonStyled onClick={onClick}>{children}</CostumButtonStyled>;
};

export default CustomButton;
