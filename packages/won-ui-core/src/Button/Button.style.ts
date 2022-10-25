import { css } from '@emotion/react';

export const button = css`
  font-family: Charcoal, sans-serif;
  border: none;
  outline: 0;
  padding: 0 15px;
  height: 30px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  letter-spacing: 2px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.1s ease 0s;
  
  &:active {
    box-shadow: 0px 3px rgba(0, 0, 0, 0.1);
    transform: translateY(3px);
  }

  &:disabled {
    box-shadow: none;
    transform: none;
    pointer-events: none;
  }
`;
