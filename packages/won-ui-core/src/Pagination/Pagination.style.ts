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
    padding: 0 8px;
    margin-right: 5px;
  `,
  rightArrow: css`
    padding: 0 8px;
    margin-left: 5px;
  `,
});

export const pageBtnStyle = (isSelected: boolean) => css`
  margin-right: 2px;
  color: white;
  font-weight: ${isSelected ? 'bold' : 'normal'};
`;
