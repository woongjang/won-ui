export { default } from './WonSelect';
export * from './WonSelect';

export { default as WonSelectOptionItem } from './WonSelectOptionItem';
export * from './WonSelectOptionItem';

export { default as WonSelectOptionList } from './WonSelectOptionList';
export * from './WonSelectOptionList';

export { default as WonSelectLabel } from './WonSelectLabel';
export * from './WonSelectLabel';

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