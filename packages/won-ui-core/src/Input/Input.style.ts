import { css } from '@emotion/react';
import { black, blue, red } from '@won-ui/styles';

export const input = css`
  font-family: Charcoal, sans-serif;
  font-size: 14px;
  width: 100%;
  height: 36px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid ${black[30]};
  transition: border-color 0.1 ease, box-shadow 0.1 ease;

  &:focus {
    outline: none;
    border-color: ${blue[60]};
    box-shadow: 0 0 3px ${blue[10]};
  }
  
  &:disabled {
    border: 1px solid lightgray;
  }
`;
