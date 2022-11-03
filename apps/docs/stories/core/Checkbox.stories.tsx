import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { Checkbox, Stack } from '@won-ui/core/src';

export default {
  title: 'won-ui/core/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Basic = () => {
  return (
    <Stack
      direction='column'
      align="flex-start"
      css={css`
        width: 100px;
        > * {
          margin-bottom: 10px;
        }
      `}
    >
      <Checkbox label="basic" />
      <Checkbox label="black" color="black" />
      <Checkbox label="red" color="red"/>
      <Checkbox label="orange" color="orange"/>
      <Checkbox label="magenta" color="magenta"/>
      <Checkbox label="yellow" color="yellow"/>
      <Checkbox label="cyan" color="cyan"/>
      <Checkbox label="indigo" color="indigo"/>
      <Checkbox label="purple" color="purple"/>
      <Checkbox label="green" color="green"/>
      <Checkbox label="teal" color="teal"/>
    </Stack>
  );
};
