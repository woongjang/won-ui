import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import { errorInput, input, inputContainer, prefixStyle, withPrefix } from './Input.style';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  style?: CSSProperties;
  error?: boolean;
  prefix?: ReactNode;
}

export function Input({ className, style, error = false, prefix, ...restProps }: InputProps) {
  return (
    <div className={className} style={style} css={inputContainer}>
      {prefix && <div css={prefixStyle}>{prefix}</div>}
      <input css={[input, error && errorInput, prefix && withPrefix]} {...restProps} />
    </div>
  );
}

Input.displayName = 'WON-Input';
