import { CSSProperties, PropsWithChildren } from 'react';
import { Text } from '../Text/Text';
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
    <div className={className} css={inputBox.root} {...restProps}>
      <label css={inputBox.label} htmlFor={id}>
        {label}
        {required && (
          <Text as="span" css={inputBox.required}>
            *
          </Text>
        )}
      </label>
      {children}
      {helperText && <Text css={inputBox.helperText}>{helperText}</Text>}
      {errorText && <Text css={inputBox.errorText}>{errorText}</Text>}
    </div>
  );
}
