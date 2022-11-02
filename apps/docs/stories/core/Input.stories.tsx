import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { Input, Stack, Text, TextInput } from '@won-ui/core/src';
import { Alien } from 'phosphor-react';

export default {
  title: 'won-ui/core/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Basic = () => {
  return (
    <Stack
      direction="column"
      align="flex-start"
      css={css`
        width: 100px;
        > * {
          margin-bottom: 10px;
        }
      `}
    >
      <Input />
      <Input error />
      <Text color="blue" as="span">with prefix</Text>
      <Input prefix={<Alien size={20} />} />
    </Stack>
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
