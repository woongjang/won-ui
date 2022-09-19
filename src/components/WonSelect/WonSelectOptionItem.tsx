import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useSelectContext } from './WonSelect';

interface OptionProps {
  isSelected: boolean;
}
const Option = styled.li<OptionProps>`
  cursor: pointer;
  font-size: 15px;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  padding-left: 0.4rem;
  :hover {
    ${(props) =>
      !props.isSelected && {
        'background-color': '#1976d2',
        color: '#e6ffff',
      }}
  }
  background-color: ${(props) => props.isSelected && '#004ba0'};
  color: ${(props) => props.isSelected && '#e6ffff'};
  font-weight: ${(props) => props.isSelected && '700'};
`;

interface Props {
  value: string;
}

function WonSelectOptionItem({
  children,
  value: propValue,
}: PropsWithChildren<Props>) {
  const { value, isOpen, onOpen, onChange } = useSelectContext();
  const handleClickOption = (e: React.MouseEvent<HTMLLIElement>) => {
    onChange(propValue);
    onOpen(!isOpen);
  };

  const isSelected = React.useMemo(
    () => propValue === value,
    [propValue, value],
  );

  return (
    <Option
      onClick={handleClickOption}
      isSelected={isSelected}
    >
      {children}
    </Option>
  );
}

export default WonSelectOptionItem;
