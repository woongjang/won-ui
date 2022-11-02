import { CSSProperties, InputHTMLAttributes } from 'react';
import { errorInput, input } from './Input.style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  style?: CSSProperties;
  error?: boolean;
}

export function Input({ className, error = false, ...restProps }: InputProps) {
  return <input className={className} css={[input, error && errorInput]} {...restProps} />;
}
