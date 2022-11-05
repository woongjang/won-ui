import { Colors } from '@won-ui/types';
import { CSSProperties, PropsWithChildren } from 'react';
import { fontColor, fontSizes, text } from './Text.style';

export interface TextProps {
  className?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: Colors;
}

export function Text({
  className,
  as: Component = 'p',
  size = 'md',
  children,
  color = 'black',
  ...restProps
}: PropsWithChildren<TextProps>) {
  return (
    <Component className={className} css={[text, fontSizes[size], fontColor(color)]} {...restProps}>
      {children}
    </Component>
  );
}

Text.displayName = 'WON-Text';
