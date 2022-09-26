import React from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useSelectContext } from './WonSelect';

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.button`
  padding: 3px 16px 3px 5px;
  min-width: 100px;
  width: 100%;
  font-size: 14px;
  min-height: 27px;
  background-color: #e6ffff;
  border: none;
  border-radius: 5px;
  border: 1px solid #e6ffff;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 #ccc;
  transition: 0.3s ease-out;
  text-align: left;
  :hover {
    background-color: #b3e5fc;
  }
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LabelArrow = styled.span<{ isOpen: boolean | undefined }>`
  margin-bottom: 4px;
  position: absolute;
  right: 8px;
  align-self: center;
  padding: 3px;
  top: ${(props) => (props.isOpen ? '11px' : '8px')};
  box-sizing: border-box;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  transform: ${(props) => (props.isOpen ? 'rotate(225deg)' : 'rotate(45deg)')};
  transition: transform 0.5s;
`;

const LabelClose = styled(AiFillCloseCircle)`
  position: absolute;
  right: 8px;
  padding-top: 1px;
`;

function WonSelectLabel({ children }: React.PropsWithChildren) {
  const { isOpen, value, onOpen, onChange } = useSelectContext();
  const handleClickLabel = (_: React.MouseEvent<HTMLDivElement>) => {
    if (onOpen) onOpen(!isOpen);
  };
  const handleRemoveValue = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation();
    if (onChange) onChange(undefined);
  };

  return (
    <LabelWrapper onClick={handleClickLabel}>
      <Label className="won-select-label">
        {value === undefined ? children : value}
        {value !== undefined ? (
          <LabelClose onClick={handleRemoveValue} />
        ) : (
          <LabelArrow className="won-select-arrow" isOpen={isOpen} />
        )}
      </Label>
    </LabelWrapper>
  );
}

export default WonSelectLabel;
