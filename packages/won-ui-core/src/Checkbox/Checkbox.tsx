import { useUniqueId } from '@won-ui/hooks';
import { wonColor } from '@won-ui/styles';
import { Check } from 'phosphor-react';
import { CSSProperties, ReactNode } from 'react';
import { Stack } from '../Stack/Stack';
import { checkboxStyle } from './Checkbox.style';

interface CheckboxProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
  label: ReactNode;
  disabled?: boolean;
  color?: keyof typeof wonColor;
}
export function Checkbox({
  className,
  id,
  label,
  disabled = false,
  color,
  ...restProps
}: CheckboxProps) {
  const uniqueId = useUniqueId(id);
  return (
    <Stack direction="row" justify="flex-start" className={className} {...restProps}>
      <span css={checkboxStyle(color).checkboxWrapper}>
        <input
          type="checkbox"
          role="checkbox"
          id={uniqueId}
          css={checkboxStyle(color).checkboxInput}
        />
        <Check className="won-check-icon" size={16} weight="bold" />
      </span>
      <div css={checkboxStyle(color).labelWrapper}>
        <label css={checkboxStyle(color).label} htmlFor={uniqueId}>
          {label}
        </label>
      </div>
    </Stack>
  );
}

Checkbox.displayName = 'WON-Checkbox';
