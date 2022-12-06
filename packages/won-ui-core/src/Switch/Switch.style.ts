import { css } from '@emotion/react';
import { wonColor } from '@won-ui/styles';
import { Colors } from '@won-ui/types';

export const wrapperStyle = css`
  display: inline-flex;
  box-sizing: border-box;
  cursor: pointer;
`;

export const switchStyle = (theme: Colors) => {
  const color = wonColor[theme];
  return {
    input: css`
      box-sizing: border-box;
      padding: 0;
      height: 1px;
      appearance: none;
      &:checked + span {
        background-color: ${color[60]};
        border: 1px solid transparent;
        span {
          left: calc((100% - 18px) - 2px);
        }
      }
    `,
    wrapper: css`
      background-color: ${color[30]};
      border: 1px solid ${color[40]};
      cursor: pointer;
      position: relative;
      border-radius: 10px;
      height: 20px;
      width: 40px;
      margin: 0px;
      display: inline-flex;
      align-items: center;
      user-select: none;
      transition: background-color 0.3s ease-out;
    `,
    ball: css`
      position: absolute;
      border-radius: 8px;
      box-sizing: border-box;
      display: flex;
      height: 18px;
      width: 18px;
      background-color: ${color[10]};
      left: 2px;
      transition: left 0.2s ease-in;
    `,
  };
};

export const labelStyle = css`
  font-family: Charcoal, sans-serif;
  padding-left: 14px;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  align-self: center;
`;
