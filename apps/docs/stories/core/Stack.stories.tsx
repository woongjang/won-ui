import { ComponentMeta } from '@storybook/react';
import { Button, Stack } from '@won-ui/core/src';

export default {
  title: 'won-ui/core/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

export const RowStack = () => {
  return (
    <div>
    <Stack align="flex-start" justify="center">
      <Button>Basic</Button>
      <Button disabled>Disabled</Button>
    </Stack>
    <Stack align="center" justify="center">
      <Button>Basic</Button>
      <Button disabled>Disabled</Button>
    </Stack>
    <Stack align="flex-end" justify="center">
      <Button>Basic</Button>
      <Button disabled>Disabled</Button>
    </Stack>
    </div>
  );
};

export const ColumnStack = () => {
  return (
    <Stack direction="column" align="center">
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
