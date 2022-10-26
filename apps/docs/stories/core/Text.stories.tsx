import { ComponentMeta } from '@storybook/react';
import { Input, InputBox } from '@won-ui/core/src';
import { css } from '@emotion/react';

export default {
  title: 'won-ui/core/Text',
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

export const WithInputBox = () => {
  return (
    <InputBox
      id="test-id"
      label="won-input-box"
      css={css`
        width: 400px;
      `}
      helperText="input-box for test"
      errorText="input-box error"
      required
    >
      <Input id="test-id"/>
    </InputBox>
  )
}