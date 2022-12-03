import { css } from '@emotion/react';

export const commonBtnStyle = css`
  min-width: 32px;
  padding: 0 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const moreBtnStyle = [
  commonBtnStyle,
  css`
    margin: 0 2px;
  `,
];

export const arrowStyle = {
  leftArrow: [
    commonBtnStyle,
    css`
      padding: 0 3px;
      margin-right: 5px;
    `,
  ],
  rightArrow: [
    commonBtnStyle,
    css`
      padding: 0 3px;
      margin-left: 5px;
    `,
  ],
};

export const pageBtnStyle = (isSelected: boolean) => [
  commonBtnStyle,
  css`
    margin-right: 2px;
    padding: 0 2px;
    margin: 0 2px;
    font-weight: ${isSelected ? 'bold' : 'normal'};
  `,
];
