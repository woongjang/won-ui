import { CSSProperties, PropsWithChildren } from 'react';
import { inputBox } from './InputBox.style';

export interface InputBoxProps {
  className?: string;
  style?: CSSProperties;
  /**
   * label 연결시에 필요하므로 필수 prop
   */
  id: string;
  label?: string;
  // errorText위에 존재하는 text
  helperText?: string;
  errorText?: string;
  required?: boolean;
}

export function InputBox({
  className,
  id,
  label,
  helperText,
  errorText,
  required = false,
  children,
  ...restProps
}: PropsWithChildren<InputBoxProps>) {
  return (
    <div
      className={className}
      css={inputBox.root}
      {...restProps}
    >
      <label
        css={inputBox.label}
        htmlFor={id}
      >
        {label} {required && <span css={inputBox.required}>*</span>}
      </label>
      {children}
      {helperText && (
        <p css={inputBox.helperText}>{helperText}</p>
      )}
      {errorText && (
        <p css={inputBox.errorText}>{errorText}</p>
      )}
    </div>
  )
}