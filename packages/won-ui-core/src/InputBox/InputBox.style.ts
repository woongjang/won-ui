import { css } from '@emotion/react';

export const inputBox = {
  root: css`
    font-family: Charcoal, sans-serif;
  `,
  label: css`
    display: block;
    margin-bottom: 3px;
    font-size: 15px;
    font-weight: bold;
    color: gray;
  `,
  required: css`
    color: red;
  `,
  helperText: css`
    margin: 3px 0;
    font-size: 14px;
    color: gray;
  `,
  errorText: css`
    color: red;
    font-size: 13px;
    margin: 3px 0;
  `,
}