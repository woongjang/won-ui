import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { Input, TextInput } from '@won-ui/core/src';

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
        > * {
          margin-bottom: 10px;
        }
      `}
    >
      <Input />
      <Input error />
    </div>
  );
};

export const BasicTextInput = () => {
  return (
    <TextInput
      id="test-id"
      label="won-input-box"
      css={css`
        width: 400px;
      `}
      helperText="input-box for test"
      errorText="input-box error"
      required
    />
  );
};

export const DisabledTextInput = () => {
  return <TextInput disabled />;
};
