import React from 'react';
import styled from 'styled-components';
import useOutsideClick from './hooks/useOutsideClick';
import { useSelectContext } from './WonSelect';

const OptionList = styled.ul`
  list-style: none;
  position: absolute;
  width: 100%;
  max-height: 10rem;
  overflow: auto;
  margin: 0;
  padding: 0;
  border-radius: 5px;
  background-color: #e6ffff;
  box-shadow: 0 1px 4px 0 #ccc;
  color: black;
  margin-top: 3px;
`;

function WonSelectOptionList({ children }: React.PropsWithChildren) {
  const { isOpen, onOpen } = useSelectContext();
  const listRef = React.useRef<HTMLUListElement>(null);
  const handleBlurSelect = (e: CustomEvent<MouseEvent>) => {
    const isLabelButton = (e.target as Element).classList.contains(
      'won-select-label',
    );
    if (isLabelButton) return;
    if (isOpen && onOpen) onOpen(!isOpen);
  };
  useOutsideClick(listRef, handleBlurSelect);
  if (!isOpen) return null;
  return <OptionList ref={listRef}>{children}</OptionList>;
}

export default WonSelectOptionList;
