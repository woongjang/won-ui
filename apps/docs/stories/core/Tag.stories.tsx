import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { Stack, Tag, Text } from '@won-ui/core/src';

export default {
  title: 'won-ui/core/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Basic = () => {
  return (
    <Stack direction="column" align="flex-start">
      <Text size="xl">light</Text>
      <Stack
        align="flex-start"
        css={css`
          > * {
            margin: 5px;
          }
        `}
      >
        <Tag color="black">black</Tag>
        <Tag color="red">red</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="magenta">magenta</Tag>
        <Tag color="yellow">yellow</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="indigo">indigo</Tag>
        <Tag color="purple">purple</Tag>
        <Tag color="green">green</Tag>
        <Tag color="teal">teal</Tag>
      </Stack>
      <Text size="xl">filled</Text>
      <Stack
        align="flex-start"
        css={css`
          > * {
            margin: 5px;
          }
        `}
      >
        <Tag type="filled" color="black">black</Tag>
        <Tag type="filled" color="red">red</Tag>
        <Tag type="filled" color="orange">orange</Tag>
        <Tag type="filled" color="magenta">magenta</Tag>
        <Tag type="filled" color="yellow">yellow</Tag>
        <Tag type="filled" color="blue">blue</Tag>
        <Tag type="filled" color="cyan">cyan</Tag>
        <Tag type="filled" color="indigo">indigo</Tag>
        <Tag type="filled" color="purple">purple</Tag>
        <Tag type="filled" color="green">green</Tag>
        <Tag type="filled" color="teal">teal</Tag>
      </Stack>
      <Text size="xl">outline</Text>
      <Stack
        align="flex-start"
        css={css`
          > * {
            margin: 5px;
          }
        `}
      >
        <Tag type="outline" color="black">black</Tag>
        <Tag type="outline" color="red">red</Tag>
        <Tag type="outline" color="orange">orange</Tag>
        <Tag type="outline" color="magenta">magenta</Tag>
        <Tag type="outline" color="yellow">yellow</Tag>
        <Tag type="outline" color="blue">blue</Tag>
        <Tag type="outline" color="cyan">cyan</Tag>
        <Tag type="outline" color="indigo">indigo</Tag>
        <Tag type="outline" color="purple">purple</Tag>
        <Tag type="outline" color="green">green</Tag>
        <Tag type="outline" color="teal">teal</Tag>
      </Stack>
    </Stack>
  );
};
