import { css } from '@emotion/react';
import { wonColor } from '@won-ui/styles';
import { Colors } from '@won-ui/types';

export const text = css`
  font-family: Charcoal, sans-serif;
`;

export const fontColor = (theme: Colors) => css`
  color: ${wonColor[theme][60]};
`;

export const fontSizes = {
  xs: css`
    font-size: 12px;
  `,
  sm: css`
    font-size: 14px;
  `,
  md: css`
    font-size: 16px;
  `,
  lg: css`
    font-size: 18px;
  `,
  xl: css`
    font-size: 20px;
  `,
};
