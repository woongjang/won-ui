import { ComponentMeta } from '@storybook/react';
import { Button } from '@won-ui/core/src';
import { css } from '@emotion/react';

export default {
  title: 'won-ui/Button',
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
      <Button>Basic</Button>
      <Button disabled>
        Disabled
      </Button>
    </div>
  );
};

// const Template: ComponentStory<typeof Button> = props => <Button {...props} />;
