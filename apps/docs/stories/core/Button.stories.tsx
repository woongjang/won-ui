import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { Button, Stack, Text } from '@won-ui/core/src';

export default {
  title: 'won-ui/core/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic = () => {
  return (
    <Stack direction="column" align="flex-start">
      <Text size="lg" as="span">
        Filled
      </Text>
      <Stack
        direction="row"
        align="flex-start"
        css={css`
          flex-wrap: wrap;
          padding: 20px 0;
        `}
      >
        <Button>Basic</Button>
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
      <Text size="lg" as="span">
        light
      </Text>
      <Stack
        direction="row"
        align="flex-start"
        css={css`
          flex-wrap: wrap;
          padding: 20px 0;
        `}
      >
        <Button variant="light">Basic</Button>
        <Button variant="light" disabled>Disabled</Button>
        <Button variant="light" color="black">black</Button>
        <Button variant="light" color="red">red</Button>
        <Button variant="light" color="orange">orange</Button>
        <Button variant="light" color="magenta">magenta</Button>
        <Button variant="light" color="yellow">yellow</Button>
        <Button variant="light" color="blue">blue</Button>
        <Button variant="light" color="cyan">cyan</Button>
        <Button variant="light" color="indigo">indigo</Button>
        <Button variant="light" color="purple">purple</Button>
        <Button variant="light" color="green">green</Button>
        <Button variant="light" color="teal">teal</Button>
      </Stack>
      <Text size="lg" as="span">
        outline
      </Text>
      <Stack
        direction="row"
        align="flex-start"
        css={css`
          flex-wrap: wrap;
          padding: 20px 0;
        `}
      >
        <Button variant="outline" >Basic</Button>
        <Button variant="outline" disabled>Disabled</Button>
        <Button variant="outline" color="black">black</Button>
        <Button variant="outline" color="red">red</Button>
        <Button variant="outline" color="orange">orange</Button>
        <Button variant="outline" color="magenta">magenta</Button>
        <Button variant="outline" color="yellow">yellow</Button>
        <Button variant="outline" color="blue">blue</Button>
        <Button variant="outline" color="cyan">cyan</Button>
        <Button variant="outline" color="indigo">indigo</Button>
        <Button variant="outline" color="purple">purple</Button>
        <Button variant="outline" color="green">green</Button>
        <Button variant="outline" color="teal">teal</Button>
      </Stack>
      <Text size="lg" as="span">
        borderless
      </Text>
      <Stack
        direction="row"
        align="flex-start"
        css={css`
          flex-wrap: wrap;
          padding: 20px 0;
        `}
      >
        <Button variant="borderless" >Basic</Button>
        <Button variant="borderless" disabled>Disabled</Button>
        <Button variant="borderless" color="black">black</Button>
        <Button variant="borderless" color="red">red</Button>
        <Button variant="borderless" color="orange">orange</Button>
        <Button variant="borderless" color="magenta">magenta</Button>
        <Button variant="borderless" color="yellow">yellow</Button>
        <Button variant="borderless" color="blue">blue</Button>
        <Button variant="borderless" color="cyan">cyan</Button>
        <Button variant="borderless" color="indigo">indigo</Button>
        <Button variant="borderless" color="purple">purple</Button>
        <Button variant="borderless" color="green">green</Button>
        <Button variant="borderless" color="teal">teal</Button>
      </Stack>
      <Text size="lg" as="span">
        Disabled with Color
      </Text>
      <Stack
        direction="row"
        align="flex-start"
        css={css`
          flex-wrap: wrap;
          padding: 20px 0;
        `}
      >
        <Button variant="borderless" disabled color="black">black</Button>
        <Button variant="borderless" disabled color="red">red</Button>
        <Button variant="borderless" disabled color="orange">orange</Button>
        <Button variant="borderless" disabled color="magenta">magenta</Button>
        <Button variant="borderless" disabled color="yellow">yellow</Button>
        <Button variant="borderless" disabled color="blue">blue</Button>
        <Button variant="borderless" disabled color="cyan">cyan</Button>
        <Button variant="borderless" disabled color="indigo">indigo</Button>
        <Button variant="borderless" disabled color="purple">purple</Button>
        <Button variant="borderless" disabled color="green">green</Button>
        <Button variant="borderless" disabled color="teal">teal</Button>
      </Stack>
    </Stack>
    
  );
};
