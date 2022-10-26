import { css } from '@emotion/react';
import { createElement, CSSProperties, PropsWithChildren } from 'react';
import { fontSizes, text } from './Text.style';

export interface TextProps {
  className?: string;
  style?: CSSProperties;
  as?: string;
  // material ui 와 같은 사이즈 목록 제공
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Text({
  className,
  as = 'p',
  size = 'md',
  children,
  ...restProps
}: PropsWithChildren<TextProps>) {
  return createElement(
    as,
    {
      className: className,
      css: css`
        ${text}
        ${fontSizes[size]}
      `,
      ...restProps,
    },
    children
  );
}
