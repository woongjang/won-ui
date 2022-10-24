import React from 'react';

export interface SelectState<T> {
  value?: T;
  isOpen?: boolean;
  defaultValue?: T;
  defaultOpen?: boolean;
  disabled?: boolean;
  onOpen?: (isOpen: boolean) => void;
  onChange?: (value: T) => void;
}

function useSelectState<T>(param: SelectState<T>) {
  const {
    value: paramValue,
    isOpen: paramIsOpen,
    defaultValue,
    defaultOpen,
    disabled: paramDisabled,
    onOpen,
    onChange,
  } = param;
  const [value, setValue] = React.useState(defaultValue);
  const [isOpen, setIsOpen] = React.useState<boolean>(
    defaultOpen === undefined ? false : defaultOpen,
  );
  const [disabled, setDisabled] = React.useState(paramDisabled || false);

  React.useEffect(() => {
    if (paramValue !== undefined) {
      setValue(paramValue);
    }
  }, [paramValue]);

  React.useEffect(() => {
    if (paramIsOpen !== undefined) {
      setIsOpen(paramIsOpen);
    }
  }, [paramIsOpen]);

  const handleChangeValue = React.useCallback((updateValue: T) => {
    if (onChange) {
      onChange(updateValue);
    }
    setValue(updateValue);
  }, [onChange]);

  const handleOpen = React.useCallback((updateOpen: boolean) => {
    if (onOpen) {
      onOpen(updateOpen);
    }
    setIsOpen(updateOpen);
  }, [onOpen]);

  return {
    value,
    onChange: handleChangeValue,
    isOpen,
    onOpen: handleOpen,
    disabled,
  };
}

export default useSelectState;
