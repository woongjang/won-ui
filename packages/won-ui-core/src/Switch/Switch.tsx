import { useUniqueId } from '@won-ui/hooks';
import { Colors } from '@won-ui/types';
import { CSSProperties, ReactNode } from 'react';
import { labelStyle, switchStyle, wrapperStyle } from './Switch.style';

interface SwitchProps {
  className?: string;
  style?: CSSProperties;
  label?: ReactNode;
  id?: string;
  color?: Colors;
}

export function Switch({ id, label, color = 'blue', ...restProps }: SwitchProps) {
  const uniqueId = useUniqueId(id);
  return (
    <label css={wrapperStyle} htmlFor={uniqueId} {...restProps}>
      <input css={switchStyle(color).input} type="checkbox" role="checkbox" id={uniqueId}/>
      <span css={switchStyle(color).wrapper}>
        <span css={switchStyle(color).ball} />
      </span>
      {label && (
        <span css={labelStyle} >
          {label}
        </span>
      )}
    </label>
  );
}

Switch.displayName = 'WON-Switch';
