import { css } from '@emotion/react';
import { InputHTMLAttributes, CSSProperties } from 'react';
import { input } from './Input.style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

  style?: CSSProperties;
}

export function Input({
  className,
  ...restProps
}: InputProps) {
  return (
    <input
      className={className}
      css={css`
        ${input}
      `}
      {...restProps}
    >
    </input>
  )
}