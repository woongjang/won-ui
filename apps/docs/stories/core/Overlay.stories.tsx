import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { Overlay, Stack, Tag, Text } from '@won-ui/core/src';

export default {
  title: 'won-ui/core/Overlay',
  component: Overlay,
} as ComponentMeta<typeof Overlay>;

export const Basic = () => {
  return (
    <>
      <Text size="xl">without blur</Text>
      <Stack
        align="flex-start"
        css={css`
          > * {
            margin: 5px;
          }
        `}
      >
        <Tag type="filled" color="black">
          black
        </Tag>
        <Tag type="filled" color="red">
          red
        </Tag>
        <Tag type="filled" color="orange">
          orange
        </Tag>
        <Tag type="filled" color="magenta">
          magenta
        </Tag>
        <Tag type="filled" color="yellow">
          yellow
        </Tag>
        <Tag type="filled" color="green">
          green
        </Tag>
        <Tag type="filled" color="teal">
          teal
        </Tag>
        <Overlay opacity={0.6}/>
      </Stack>
      <Text size="xl">with blur</Text>
      <Stack
        align="flex-start"
        css={css`
          > * {
            margin: 5px;
          }
        `}
      >
        <Tag type="outline" color="black">
          black
        </Tag>
        <Tag type="outline" color="red">
          red
        </Tag>
        <Tag type="outline" color="orange">
          orange
        </Tag>
        <Tag type="outline" color="magenta">
          magenta
        </Tag>
        <Tag type="outline" color="yellow">
          yellow
        </Tag>
        <Tag type="outline" color="blue">
          blue
        </Tag>
        <Tag type="outline" color="cyan">
          cyan
        </Tag>
        <Overlay opacity={0.1} blur={2} />
      </Stack>
    </>
  );
};
