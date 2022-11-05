import { css } from '@emotion/react';
import { black, wonColor } from '@won-ui/styles';
import { Colors } from '@won-ui/types';

export const buttonStyle = (theme: Colors) => {
  const color = wonColor[theme];
  return css`
    box-sizing: border-box;
    font-family: Charcoal, sans-serif;
    border: none;
    outline: 0;
    padding: 0 15px;
    height: 30px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    letter-spacing: 2px;
    box-shadow: 0px 3px 3px ${color[20]};
    transition: all 0.1s ease 0s;

    background-color: ${color[60]};
    color: ${color[10]};

    &:active {
      box-shadow: 0px 3px rgba(0, 0, 0, 0.1);
      transform: translateY(3px);
    }

    &:disabled {
      box-shadow: none;
      transform: none;
      pointer-events: none;
      color: ${black[20]};
      background-color: ${black[10]};
    }
  `;
};
