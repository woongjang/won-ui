import { ComponentMeta } from '@storybook/react';
import { Heading } from '@won-ui/core/src';

export default {
  title: 'won-ui/core/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Basic = () => {
  return (
    <>
      <Heading level={1}>h1 tag</Heading>
      <Heading level={2}>h2 tag</Heading>
      <Heading level={3}>h3 tag</Heading>
      <Heading level={4}>h4 tag</Heading>
      <Heading level={5}>h5 tag</Heading>
      <Heading level={6}>h6 tag</Heading>
    </>
  );
};
