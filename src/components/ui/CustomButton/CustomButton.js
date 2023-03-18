import { CostumButtonStyled } from "../UiStyles/UiStyles";
const CustomButton = ({ children, color, boxShadow, borderRadius }) => {
  return <CostumButtonStyled>{children}</CostumButtonStyled>;
};

export default CustomButton;
