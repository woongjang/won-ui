import { nanoid } from 'nanoid';
import { ChangeEvent, CSSProperties, InputHTMLAttributes, useCallback, useRef } from 'react';
import { Input, InputProps } from '../Input/Input';
import { Override } from '@won-ui/types';
import { InputBox, InputBoxProps } from '../InputBox/InputBox';

export interface TextInputProps
  extends Omit<Override<InputProps, InputBoxProps>, 'id' | 'onChange'> {
  type?: InputHTMLAttributes<HTMLInputElement>['inputMode'];
  id?: string;
  value: string;
  onChange: (value: string) => void;
  style?: CSSProperties;
}
/**
 * InputBox와 Input으로 이루어진 컴포넌트 이지만
 * 현재는 아래의 편의성을 위해 제공
 * - label과 id를 동일하게 맞추기위한 nanoid 작업
 *
 * 컴포넌트 생김새는 carbon 디자인시스템의 textInput과 유사함
 */
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
    onChange(value);
  }, []);
  return (
    <InputBox
      className={className}
      id={uniqueId}
      label={label}
      helperText={helperText}
      errorText={errorText}
    >
      <Input
        id={uniqueId}
        type={type}
        value={value}
        onChange={handleChange}
        {...restProps}
      />
    </InputBox>
  )
}
