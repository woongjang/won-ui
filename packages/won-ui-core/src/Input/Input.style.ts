import { css } from '@emotion/react';
import { black, blue, red } from '@won-ui/styles';

export const inputContainer = css`
  position: relative;
`;

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

export const errorInput = css`
  border-color: ${red[50]};
  box-shadow: 0 0 3px ${red[10]};
`;

export const withIcon = css`
  padding-left: 30px;
`;

export const iconStyle = css`
  pointer-events: none;
  position: absolute;
  color: ${black[60]};
  height: 36px;
  width: 30px;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
`;
