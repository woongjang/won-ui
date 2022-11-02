import { wonColor } from '@won-ui/styles';
import { CSSProperties, PropsWithChildren } from 'react';
import { tagStyle } from './Tag.style';

interface TagProps {
  className?: string;
  style?: CSSProperties;
  color?: keyof typeof wonColor;
}
export function Tag({ className, color = 'black', children, ...props }: PropsWithChildren<TagProps>) {
  return (
    <div
      className={className}
      css={tagStyle(color)}
    >
      {children}
    </div>
  )
}

Tag.displayName = 'WON-Tag';