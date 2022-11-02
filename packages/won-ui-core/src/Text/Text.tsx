import { wonColor } from '@won-ui/styles';
import { CSSProperties, PropsWithChildren } from 'react';
import { fontColor, fontSizes, text } from './Text.style';

export interface TextProps {
  className?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
  // material ui 와 같은 사이즈 목록 제공
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: keyof typeof wonColor;
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
