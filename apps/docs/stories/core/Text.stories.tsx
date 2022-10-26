import { ComponentMeta } from '@storybook/react';
import { Text } from '@won-ui/core/src';
import { css } from '@emotion/react';

export default {
  title: 'won-ui/core/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Basic = () => {
  return (
    <>
      <Text as="span">as span</Text>
      <Text as="div">as div</Text>
      <Text as="div" size="xs">
        xs
      </Text>
      <Text as="div" size="sm">
        sm
      </Text>
      <Text as="div" size="md">
        md
      </Text>
      <Text as="div" size="lg">
        lg
      </Text>
      <Text as="div" size="xl">
        xl
      </Text>
    </>
  );
};
