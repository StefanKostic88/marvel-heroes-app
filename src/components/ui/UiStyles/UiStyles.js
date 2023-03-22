import styled from "styled-components";

export const CostumButtonStyled = styled.button`
  background: transparent;
  background-color: ${({ theme }) => theme.btnBackgroundColor};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.inputBorderColor};
  color: ${({ theme }) => theme.btnTextColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.75rem 3.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.65rem;
  transition: all 100ms ease-in;
  transform: scale(0.95);
  &:hover,
  &:focus {
    transform: scale(1);
  }
`;

export const CostumInputControlsStyled = styled.form`
  display: flex;
`;

export const CostumInputStyled = styled.input`
  flex: 1;
  font-size: 1.6rem;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  border: none;
  padding-left: 1.25rem;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.inputBorderColor};
`;

export const CustomInputButtonStyled = styled(CostumButtonStyled)`
  border-radius: unset;
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
  transform: unset;
  &:hover,
  &:focus {
    transform: unset;
  }
`;

export const CardButtonsStyled = styled(CostumButtonStyled)`
  font-size: 1.65rem;
`;
