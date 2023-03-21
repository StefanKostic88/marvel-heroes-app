import React from "react";
import {
  CostumInputStyled,
  CostumInputControlsStyled,
  CustomInputButtonStyled,
} from "../UiStyles/UiStyles";
import { CustomButton } from "../../../components";

const CostumInputControls = ({
  type,
  placeholder,
  onChange,
  onSubmit,
  value,
}) => {
  return (
    <CostumInputControlsStyled onSubmit={onSubmit}>
      <CostumInputStyled
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <CustomInputButtonStyled>Cao</CustomInputButtonStyled>
    </CostumInputControlsStyled>
  );
};

export default CostumInputControls;
