import { keyframes, css } from "styled-components";

export const loadingAns = keyframes`
0% {
  transform: translateX(-100%);
}
100% {
  transform: translateX(100%);
}
`;

export const MixinsAfter = css`
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to left,
      transparent,
      rgb(216, 216, 216),
      transparent
    );
    animation: ${loadingAns} 1s linear infinite;
  }
`;

export const MixinsAfterBlue = css`
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to left,
      transparent,
      rgb(50, 85, 99),
      transparent
    );
    animation: ${loadingAns} 1s linear infinite;
  }
`;
