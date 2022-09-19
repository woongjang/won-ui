import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import useSelectState from './hooks/useSelectState';
import { SelectProps, SelectState } from './types';

export const SelectContext = React.createContext<SelectState | undefined>(
  undefined,
);

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

function WonSelect(props: PropsWithChildren<SelectProps>) {
  const {
    isOpen: isOpenProp,
    onOpen: onOpenProp,
    value: valueProp,
    onChange: onChangeProp,
    children,
  } = props;
  const { isOpen, onOpen, value, onChange } = useSelectState({
    value: valueProp,
    isOpen: isOpenProp,
    defaultOpen: isOpenProp,
    defaultValue: valueProp,
    onChange: onChangeProp,
    onOpen: onOpenProp,
  });

  const contextValue = React.useMemo(
    () => ({
      isOpen,
      onOpen,
      value,
      onChange,
    }),
    [isOpen, onOpen, value, onChange],
  );

  return (
    <SelectContext.Provider value={contextValue}>
      <SelectContainer>{children}</SelectContainer>
    </SelectContext.Provider>
  );
}

export function useSelectContext() {
  const context = React.useContext(SelectContext);
  if (!context) throw new Error('select ctx is undefined');
  return context;
}

export default WonSelect;
