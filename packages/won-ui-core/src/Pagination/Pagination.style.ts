import { css } from '@emotion/react';

export const arrowStyle = {
  leftArrow: css`
    display: flex;
    align-items: center;
    padding: 0 3px;
    margin-right: 5px;
  `,
  rightArrow: css`
    display: flex;
    align-items: center;
    padding: 0 3px;
    margin-left: 5px;
  `,
};

export const pageBtnStyle = (isSelected: boolean) => css`
  margin-right: 2px;
  min-width: 32px;
  padding: 0 2px;
  margin: 0 2px;
  font-weight: ${isSelected ? 'bold' : 'normal'};
`;
