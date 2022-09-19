export interface SelectState {
  isOpen: boolean;
  value: string;
  onChange: (value: string) => void;
  onOpen: (isOpen: boolean) => void;
}

export interface SelectProps {
  isOpen?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onOpen?: (isOpen: boolean) => void;
}
