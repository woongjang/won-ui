import { createElement, CSSProperties, PropsWithChildren } from 'react';
import { fontSizes, text } from './Text.style';

export interface TextProps {
  className?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
  // material ui 와 같은 사이즈 목록 제공
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Text({
  className,
  as: Component = 'p',
  size = 'md',
  children,
  ...restProps
}: PropsWithChildren<TextProps>) {
  return (
    <Component className={className} css={[text, fontSizes[size]]} {...restProps}>
      {children}
    </Component>
  );
}
