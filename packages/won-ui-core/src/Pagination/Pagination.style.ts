import { css } from '@emotion/react';
import { Colors } from '@won-ui/types';

export const containerStyle = css`
  display: flex;
  justify-content: center;
`;

export const paginationStyle = css`
  display: flex;
  justify-self: center;
`;

export const arrowStyle = (theme: Colors) => ({
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
});

export const pageBtnStyle = (isSelected: boolean) => css`
  margin-right: 2px;
  min-width: 32px;
  padding: 0 2px;
  margin: 0 2px;
  font-weight: ${isSelected ? 'bold' : 'normal'};
`;
