import { css } from '@emotion/react';
import { wonColor } from '@won-ui/styles';

export const tagStyle = (theme: keyof typeof wonColor) => {
  const color = wonColor[theme];
  return css`
    background-color: ${color[10]};
    color: ${color[70]};
    font-family: Charcoal, sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    font-size: 12px;
    height: 20px;
    border-radius: 10px;
    font-weight: bold;
    letter-spacing: 0.3px;
  `;
};
