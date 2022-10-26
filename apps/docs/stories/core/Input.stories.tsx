import { ComponentMeta } from '@storybook/react';
import { Input, TextInput } from '@won-ui/core/src';
import { css } from '@emotion/react';
import { useState } from 'react';

export default {
  title: 'won-ui/core/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Basic = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 100px;
      `}
    >
      <Input />
    </div>
  );
};

export const BasicTextInput = () => {
  const [value, setValue] = useState('');

  return (
    <TextInput
      value={value}
      onChange={setValue}
      id="test-id"
      label="won-input-box"
      css={css`
        width: 400px;
      `}
      helperText="input-box for test"
      errorText="input-box error"
      required
    />
  )
}
