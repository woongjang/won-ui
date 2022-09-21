import React from 'react';
import styled from 'styled-components';

const Button = styled.button<Pick<ToolButtonProps, 'isOn'>>`
  box-sizing: border-box;
  border: none;
  height: 100%;
  border-radius: 5px;
  margin: 0.05rem;
  padding: 0 0.5rem;
  -webkit-appearance: button;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: color, background-color;
  background-color: ${props => (props.isOn ? 'black' : 'transparent')};
  color: ${props => (props.isOn ? 'white' : 'black')};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition-property: none;
    color: black;
  }
`;

export interface ToolButtonProps {
  isOn?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function ToolButton(props: React.PropsWithChildren<ToolButtonProps>) {
  const { isOn, onClick, children } = props;
  return (
    <Button isOn={isOn} onClick={onClick}>
      {children}
    </Button>
  );
}

export default ToolButton;
