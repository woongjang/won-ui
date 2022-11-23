import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { Pagination, Stack } from '@won-ui/core/src';

export default {
  title: 'won-ui/core/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

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
      <Pagination total={300} />
      <Pagination total={300} color="red"/>
    </Stack>
  );
};
