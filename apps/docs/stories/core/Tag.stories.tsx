import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { Stack, Tag } from '@won-ui/core/src';

export default {
  title: 'won-ui/core/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Basic = () => {
  return (
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
  );
};
