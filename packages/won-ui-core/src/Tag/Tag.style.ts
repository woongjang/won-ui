import { css } from '@emotion/react';
import { wonColor } from '@won-ui/styles';

export const tagStyle = (theme: keyof typeof wonColor, type: 'light' | 'filled' | 'outline') => {
  const color = wonColor[theme];
  const defaultStyle = css`
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
    border: 2px solid transparent;
  `;
  const tagTypeStyle = {
    light: css`
      background-color: ${color[10]};
      color: ${color[50]};
    `,
    filled: css`
      background-color: ${color[60]};
      color: ${color[10]};
    `,
    outline: css`
      box-sizing: border-box;
      border: 2px solid ${color[60]};
      color: ${color[60]};
    `,
  };
  return [defaultStyle, tagTypeStyle[type]];
};
