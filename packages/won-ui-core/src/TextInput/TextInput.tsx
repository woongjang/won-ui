import { Override } from '@won-ui/types';
import { ChangeEvent, CSSProperties, InputHTMLAttributes, useRef } from 'react';
import { Input, InputProps } from '../Input/Input';
import { InputBox, InputBoxProps } from '../InputBox/InputBox';

export interface TextInputProps
  extends Omit<Override<InputProps, InputBoxProps>, 'id' | 'onChange'> {
  type?: InputHTMLAttributes<HTMLInputElement>['inputMode'];
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  style?: CSSProperties;
}

export function TextInput({
  className,
  id,
  type = 'text',
  label,
  errorText,
  helperText,
  value,
  onChange,
  required,
  ...restProps
}: TextInputProps) {
  const uniqueId = id || useRef(`won-ui-${Math.random().toString(36).slice(2)}`).current;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <InputBox
      className={className}
      id={uniqueId}
      label={label}
      helperText={helperText}
      errorText={errorText}
      required={required}
    >
      <Input id={uniqueId} type={type} value={value} onChange={handleChange} {...restProps} />
    </InputBox>
  );
}
