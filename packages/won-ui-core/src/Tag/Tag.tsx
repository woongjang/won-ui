import { wonColor } from '@won-ui/styles';
import { CSSProperties, PropsWithChildren } from 'react';
import { tagStyle } from './Tag.style';

interface TagProps {
  className?: string;
  style?: CSSProperties;
  color?: keyof typeof wonColor;
  type?: 'light' | 'filled' | 'outline';
}
export function Tag({
  className,
  color = 'black',
  children,
  type = 'light',
  ...props
}: PropsWithChildren<TagProps>) {
  return (
    <div className={className} css={tagStyle(color, type)}>
      {children}
    </div>
  );
}

Tag.displayName = 'WON-Tag';
