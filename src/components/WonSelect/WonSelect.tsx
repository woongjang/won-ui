import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import useSelectState, { SelectState } from './hooks/useSelectState';


export interface SelectProps<ValueType> {
  isOpen?: boolean;
  value?: ValueType;
  disabled?: boolean;
  onChange?: (value: ValueType) => void;
  onOpen?: (isOpen: boolean) => void;
}

export const SelectContext = React.createContext<SelectState<any> | undefined>(
  undefined,
);

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

function WonSelect<ValueType>(props: PropsWithChildren<SelectProps<ValueType>>) {
  const {
    isOpen: isOpenProp,
    onOpen: onOpenProp,
    value: valueProp,
    onChange: onChangeProp,
    disabled: disabledProp,
    children,
  } = props;
  const { isOpen, onOpen, value, onChange, disabled } = useSelectState({
    value: valueProp,
    isOpen: isOpenProp,
    defaultOpen: isOpenProp,
    defaultValue: valueProp,
    disabled: disabledProp,
    onChange: onChangeProp,
    onOpen: onOpenProp,
  });

  const contextValue = React.useMemo(
    () => ({
      isOpen,
      value,
      onOpen,
      onChange,
      disabled
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
