import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { button } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: CSSProperties;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({
  className,
  type = 'button',
  disabled = false,
  children,
  ...restProps
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={className}
      css={css`
        ${button};
      `}
      disabled={disabled}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
}
