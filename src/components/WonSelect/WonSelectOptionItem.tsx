import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useSelectContext } from './WonSelect';

interface OptionProps {
  isSelected: boolean;
  disabled: boolean;
}
const Option = styled.li<OptionProps>`
  ${props =>
    props.disabled && {
      pointerEvents: 'none',
      opacity: 0.4,
    }}
  cursor: pointer;
  font-size: 15px;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  padding-left: 0.4rem;
  :hover {
    ${props =>
      !props.isSelected && {
        'background-color': '#1976d2',
        color: '#e6ffff',
      }}
  }
  background-color: ${props => props.isSelected && '#004ba0'};
  color: ${props => props.isSelected && '#e6ffff'};
  font-weight: ${props => props.isSelected && '700'};
`;

interface Props {
  value: string;
  disabled?: boolean;
}

function WonSelectOptionItem({
  children,
  value: propValue,
  disabled: propDisabled,
}: PropsWithChildren<Props>) {
  const { value, isOpen, onOpen, onChange } = useSelectContext();
  const handleClickOption = (e: React.MouseEvent<HTMLLIElement>) => {
    if (onChange) {
      onChange(propValue);
    }
    if (onOpen) {
      onOpen(!isOpen);
    }
  };

  const isSelected = React.useMemo(() => propValue === value, [propValue, value]);

  return (
    <Option onClick={handleClickOption} isSelected={isSelected} disabled={propDisabled || false}>
      {children}
    </Option>
  );
}

export default WonSelectOptionItem;
