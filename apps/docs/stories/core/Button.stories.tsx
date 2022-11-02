import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { Button, Stack } from '@won-ui/core/src';

export default {
  title: 'won-ui/core/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic = () => {
  return (
    <Stack
      direction='column'
      css={css`
        width: 100px;
        > * {
          margin-bottom: 10px;
        }
      `}
    >
      <Button>
        Basic
      </Button>
      <Button disabled>Disabled</Button>
      <Button color="black">black</Button>
      <Button color="red">red</Button>
      <Button color="orange">orange</Button>
      <Button color="magenta">magenta</Button>
      <Button color="yellow">yellow</Button>
      <Button color="blue">blue</Button>
      <Button color="cyan">cyan</Button>
      <Button color="indigo">indigo</Button>
      <Button color="purple">purple</Button>
      <Button color="green">green</Button>
      <Button color="teal">teal</Button>
    </Stack>
  );
};
