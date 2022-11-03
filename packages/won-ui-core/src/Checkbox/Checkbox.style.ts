import { css } from '@emotion/react';
import { black, wonColor } from '@won-ui/styles';

export const checkboxStyle = (theme?: keyof typeof wonColor) => {
  let color = {
    ...black,
    10: 'white',
  };
  if (theme) color = wonColor[theme]
  return {
    checkboxWrapper: css`
      position: relative;
      width: 16px;
      height: 16px;
      .won-check-icon {
        color: ${color[10]};
        position: absolute;
        pointer-events: none;
      }
    `,
    checkboxInput: css`
      position: absolute;
      cursor: pointer;
      appearance: none;
      background-color: ${color[10]};
      border: 1px solid ${color[30]};
      padding: 0px;
      margin: 0px;
      width: inherit;
      height: inherit;
      border-radius: 4px;
      :checked {
        background-color: ${color[60]};
        border: 1px solid transparent;
      }
    `,
    labelWrapper: css`
      padding-left: 15px;
    `,
    label: css`
      font-family: Charcoal, sans-serif;
      display: inline-flex;
      position: relative;
      cursor: pointer;
      font-size: 16px;
      user-select: none;
      align-items: center;
    `,
  };
};
