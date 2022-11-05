import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { Stack, Switch, Text } from '@won-ui/core/src';

export default {
  title: 'won-ui/core/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Basic = () => {
  return (
    <Stack
      direction='column'
      align='flex-start'
      css={css`
        width: 100%;
        > * {
          margin-bottom: 10px;
        }
      `}
    >
      <Text as="span">기본값</Text>
      <Switch />
      <Text as="span">label with color</Text>
      <Switch color="black" label="black" />
      <Switch color="red" label="red" />
      <Switch color="orange" label="orange" />
      <Switch color="magenta" label="magenta" />
      <Switch color="yellow" label="yellow" />
      <Switch color="blue" label="blue" />
      <Switch color="cyan" label="cyan" />
      <Switch color="indigo" label="indigo" />
      <Switch color="purple" label="purple" />
      <Switch color="green" label="green" />
      <Switch color="teal" label="teal" />
    </Stack>
  );
};
