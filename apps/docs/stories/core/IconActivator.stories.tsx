import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { IconActivator, Stack } from '@won-ui/core/src';
import { AirplaneTilt, Aperture, AppleLogo, BatteryCharging, FacebookLogo, TwitterLogo } from 'phosphor-react';

export default {
  title: 'won-ui/core/IconActivator',
  component: IconActivator,
} as ComponentMeta<typeof IconActivator>;

export const Basic = () => {
  return (
    <Stack
      direction="column"
      css={css`
        width: 100px;
        > * {
          margin-bottom: 10px;
        }
      `}
    >
      <IconActivator>
        <AirplaneTilt size={32} />
      </IconActivator>
      <IconActivator color="black">
        <Aperture size={32} />
      </IconActivator>
      <IconActivator color="red">
        <AppleLogo size={32} />
      </IconActivator>
      <IconActivator color="magenta">
        <TwitterLogo size={32} />
      </IconActivator>
      <IconActivator color="blue">
        <FacebookLogo size={32} />
      </IconActivator>
      <IconActivator color="green">
        <BatteryCharging size={32} />
      </IconActivator>
    </Stack>
  );
};
