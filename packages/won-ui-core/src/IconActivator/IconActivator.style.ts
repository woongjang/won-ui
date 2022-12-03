import { css } from '@emotion/react';
import { wonColor } from '@won-ui/styles';
import { Colors } from '@won-ui/types';

export const IconActivatorStyle = (theme: Colors, hasBorder: boolean) => {
  const color = wonColor[theme];
  return css`
    appearance: none;
    border: 1px solid ${hasBorder ? color[20] : 'transparent'};
    box-sizing: border-box;
    height: 25px;
    width: 25px;
    border-radius: 5px;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: color 0.1s ease-out;
    color: ${color[40]};
    outline: 0;
    background-color: transparent;

    &:hover {
      color: ${color[40]};
      background-color: ${color[10]};
    }

    &:focus {
      color: ${color[60]};
      border-color: ${color[40]};
      background-color: ${color[20]}
    }
  `;
};
