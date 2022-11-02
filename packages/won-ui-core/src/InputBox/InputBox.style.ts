import { css } from '@emotion/react';
import { black, red } from '@won-ui/styles';

export const inputBox = {
  root: css`
    font-family: Charcoal, sans-serif;
  `,
  label: css`
    display: block;
    margin-bottom: 3px;
    font-size: 15px;
    font-weight: bold;
    color: ${black[30]};
  `,
  required: css`
    color: ${red[60]};
  `,
  helperText: css`
    margin: 3px 0;
    font-size: 14px;
    color: ${black[30]};
  `,
  errorText: css`
    color: ${red[50]};
    font-size: 13px;
    margin: 3px 0;
  `,
};
