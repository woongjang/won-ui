import { wonColor } from '@won-ui/styles';
import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import { buttonStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  color?: keyof typeof wonColor;
}

export function Button({
  className,
  type = 'button',
  disabled = false,
  color = 'blue',
  children,
  ...restProps
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={className}
      css={buttonStyle(color)}
      disabled={disabled}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
}

Button.displayName = 'WON-Button';
