import { css, SerializedStyles } from '@emotion/react';
import { wonColor } from '@won-ui/styles';
import { Colors, WonColor } from '@won-ui/types';

export type ButtonVariant = 'filled' | 'light' | 'outline' | 'borderless';

const getVariantStyle = (color: WonColor, variant: ButtonVariant) => {
  const variants: { [variant in ButtonVariant]: SerializedStyles } = {
    filled: css`
      border: 2px solid transparent;
      box-shadow: 0px 3px 3px ${color[20]};
      background-color: ${color[60]};
      color: ${color[10]};
    `,
    light: css`
      border: 2px solid transparent;
      box-shadow: 0px 3px 3px ${color[20]};
      background-color: ${color[10]};
      color: ${color[60]};
    `,
    outline: css`
      border: 1px solid ${color[60]};
      box-shadow: 0px 3px 3px ${color[20]};
      background-color: transparent;
      color: ${color[60]};
    `,
    borderless: css`
      border: 2px solid transparent;
      background-color: transparent;
      box-shadow: none;
      color: ${color[60]};
    `,
  };
  return variants[variant];
};

export const buttonStyle = (theme: Colors, variant: ButtonVariant, disalbed: boolean) => {
  const color = wonColor[theme];
  const variantStyle = getVariantStyle(color, variant);
  return [
    variantStyle,
    css`
      box-sizing: border-box;
      font-family: Charcoal, sans-serif;
      outline: 0;
      padding: 0 15px;
      height: 30px;
      border-radius: 6px;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      user-select: none;
      letter-spacing: 0.5px;
      transition: transform 0.1s ease 0s;

      &:active {
        transform: translateY(3px);
      }

      &:disabled {
        border: none;
        box-shadow: none;
        transform: none;
        pointer-events: none;
        color: ${color[10]};
        background-color: ${color[20]};
      }
    `,
  ];
};
