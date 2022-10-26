import { HTMLAttributes, PropsWithChildren } from 'react';
import { heading } from './Heading.style';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({
  level = 1,
  children,
  ...restProps
}: PropsWithChildren<HeadingProps>) {
  const HeadingComponent: keyof JSX.IntrinsicElements = `h${level}`;
  return (
    <HeadingComponent
      css={heading}
      {...restProps}
    >
      {children}
    </HeadingComponent>
  )
}
