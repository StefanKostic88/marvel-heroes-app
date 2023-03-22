import { keyframes } from "styled-components";

export const animatePrimaryColors = keyframes`0% {
  transform: translate(-50%, -50%) rotate(0deg);
}
100% {
  transform: translate(-50%, -50%) rotate(360deg);
}`;

export const animateSecondatyColors = keyframes`
0% {
  transform: translate(-50%, -50%) rotate(360deg);
}
100% {
  transform: translate(-50%, -50%) rotate(0deg);
}
`;
