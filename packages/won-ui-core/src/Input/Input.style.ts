import { css } from '@emotion/react';

export const input = css`
  font-family: Charcoal, sans-serif;
  font-size: 14px;
  width: 100%;
  height: 36px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid gray;
  transition: border-color 0.1 ease, box-shadow 0.1 ease;

  &:focus {
    outline: none;
    border-color: black;
    box-shadow: 0 0 3px gray;
  }
`;
