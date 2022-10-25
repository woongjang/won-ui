import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from "react";
import { css } from '@emotion/react';
import { button } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: CSSProperties;
  type?: 'button' | 'submit';
}

export function Button({
  className,
  type = 'button',
  children,
  ...restProps
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={className}
      css={css`
        ${button};
      `}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
}
