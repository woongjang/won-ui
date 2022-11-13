import { css } from '@emotion/react';

export const overlayStyle = (blur: number) => css`
  backdrop-filter: blur(${blur}px);
  position: absolute;
  inset: 0px;
`;

export const baseStyle = (opacity: number) => css`
  opacity: ${opacity};
  position: absolute;
  background-color: #000;
  inset: 0px;
`;
