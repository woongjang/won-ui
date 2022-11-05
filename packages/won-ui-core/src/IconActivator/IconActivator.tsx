import { Colors } from '@won-ui/types';
import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';
import { IconActivatorStyle } from './IconActivator.style';

interface IconActivatorProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: CSSProperties;
  color?: Colors;
}

export function IconActivator({
  className,
  style,
  color = 'black',
  children,
  ...restProps
}: PropsWithChildren<IconActivatorProps>) {
  return (
    <button
      className={className}
      css={IconActivatorStyle(color)}
      type="button"
      {...restProps}
    >
    {children} 
    </button>
  );
}

IconActivator.displayName = 'WON-IconActivator';
