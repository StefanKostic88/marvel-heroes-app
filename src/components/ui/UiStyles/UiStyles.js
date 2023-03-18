import styled from "styled-components";

export const CostumButtonStyled = styled.button`
  background: transparent;
  padding: 0.75rem 3.5rem;
  outline: none;
  cursor: pointer;
  color: inherit;
  box-shadow: 0 0 0 1px #fff;
  font-size: 1.65rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 100ms ease-in;
  transform: scale(0.95);
  &:hover,
  &:focus {
    transform: scale(1);
  }
`;
