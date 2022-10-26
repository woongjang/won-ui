import { ComponentMeta } from '@storybook/react';
import { Input } from '@won-ui/core/src';
import { css } from '@emotion/react';

export default {
  title: 'won-ui/core/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Basic = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 100px;
      `}
    >
      <Input />
    </div>
  );
};
