import { wonColor } from '@won-ui/styles';
import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';
import { IconActivatorStyle } from './IconActivator.style';

interface IconActivatorProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: CSSProperties;
  color?: keyof typeof wonColor;
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
