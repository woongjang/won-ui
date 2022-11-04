import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import { errorInput, iconStyle, input, inputContainer, withIcon } from './Input.style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  style?: CSSProperties;
  error?: boolean;
  icon?: ReactNode;
}

export function Input({ className, style, error = false, icon, ...restProps }: InputProps) {
  return (
    <div className={className} style={style} css={inputContainer}>
      {icon && <div css={iconStyle}>{icon}</div>}
      <input css={[input, error && errorInput, icon && withIcon]} {...restProps} />
    </div>
  );
}

Input.displayName = 'WON-Input';
