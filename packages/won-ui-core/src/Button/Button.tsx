import { Colors } from '@won-ui/types';
import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import { buttonStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  color?: Colors;
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
