import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';
import { stackStyle } from './Stack.style';

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  className?: string;
  style?: CSSProperties;
}

export function Stack({
  className,
  direction = 'row',
  align = 'center',
  justify = 'center',
  children,
  ...restProps
}: PropsWithChildren<StackProps>) {
  return (
    <div css={stackStyle({ direction, align, justify })} className={className} {...restProps}>
      {children}
    </div>
  );
}

Stack.displayName = 'WON-Stack';
