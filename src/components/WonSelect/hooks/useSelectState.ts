import React from 'react';

interface HookParam {
  value?: string;
  isOpen?: boolean;
  defaultValue?: string;
  defaultOpen?: boolean;
  onOpen?: (isOpen: boolean) => void;
  onChange?: (value: string) => void;
}

function useSelectState(param: HookParam) {
  const {
    value: paramValue,
    isOpen: paramIsOpen,
    defaultValue,
    defaultOpen,
    onOpen,
    onChange,
  } = param;
  const [value, setValue] = React.useState<string>(defaultValue || '');
  const [isOpen, setIsOpen] = React.useState<boolean>(
    defaultOpen === undefined ? false : defaultOpen,
  );

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

  const handleChangeValue = React.useCallback((updateValue: string) => {
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
  };
}

export default useSelectState;
