import { Override } from '@won-ui/types';
import { nanoid } from 'nanoid';
import { ChangeEvent, CSSProperties, InputHTMLAttributes, useCallback, useRef } from 'react';
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
  const uniqueId = id || useRef(`won-ui-${nanoid()}`).current;
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (onChange) {
      onChange(value);
    }
  }, []);
  return (
    <InputBox
      className={className}
      id={uniqueId}
      label={label}
      helperText={helperText}
      errorText={errorText}
    >
      <Input id={uniqueId} type={type} value={value} onChange={handleChange} {...restProps} />
    </InputBox>
  );
}
