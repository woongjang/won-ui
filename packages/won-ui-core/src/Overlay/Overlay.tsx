import { HTMLAttributes } from 'react';
import { baseStyle, overlayStyle } from './Overlay.style';

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  opacity?: number;
  blur?: number;
}

export function Overlay({ opacity = 0.6, blur = 0, ...restProps }) {
  const base = ({ opacity = 0.6, ...restProps }: OverlayProps) => {
    return <div css={baseStyle(opacity)} {...restProps} />;
  };

  if (blur !== 0) {
    return (
      <div css={overlayStyle(blur)} {...restProps}>
        {base({ opacity })}
      </div>
    );
  }

  return base({ opacity, ...restProps });
}

Overlay.displayName = 'WON-Overlay';
