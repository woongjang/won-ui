import { Colors } from '@won-ui/types';
import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';
import { IconActivatorStyle } from './IconActivator.style';

interface IconActivatorProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: CSSProperties;
  color?: Colors;
  hasBorder?: boolean
}

export function IconActivator({
  className,
  style,
  color = 'black',
  children,
  hasBorder = true,
  ...restProps
}: PropsWithChildren<IconActivatorProps>) {
  return (
    <button
      className={className}
      css={IconActivatorStyle(color, hasBorder)}
      type="button"
      {...restProps}
    >
    {children} 
    </button>
  );
}

IconActivator.displayName = 'WON-IconActivator';
