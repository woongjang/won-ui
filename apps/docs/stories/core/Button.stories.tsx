import { ComponentMeta } from '@storybook/react';
import { Button } from '@won-ui/core/src';
import { css } from '@emotion/react';

export default {
  title: 'won-ui/core/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 100px;
      `}
    >
      <Button
        css={css`
          margin-bottom: 10px;
        `}
      >
        Basic
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  );
};

// const Template: ComponentStory<typeof Button> = props => <Button {...props} />;
