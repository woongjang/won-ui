import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import { $getSelection, $isRangeSelection, FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND } from 'lexical';
import ToolButton from './components/ToolButton';
import { FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight, FaBold, FaItalic, FaStrikethrough, FaUnderline } from 'react-icons/fa';
import styled from 'styled-components';
import ToolDivider from './components/ToolDivider';

const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  border-bottom: 1px solid black;
  padding: 0.4rem;
`;

function Toolbar() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = React.useState(false);
  const [isStrikethrough, setIsStrikethrough] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);
  const updateToolbar = React.useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
    }
  }, [editor]);

  React.useEffect(
    () =>
      mergeRegister(
        editor.registerUpdateListener(({ editorState }) => {
          editorState.read(() => {
            updateToolbar();
          });
        })
      ),
    [updateToolbar, editor]
  );

  return (
    <ToolbarWrapper>
      <ToolButton
        isOn={isBold}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
      >
        <FaBold />
      </ToolButton>
      <ToolButton
        isOn={isStrikethrough}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
        }}
      >
        <FaStrikethrough />
      </ToolButton>
      <ToolButton
        isOn={isItalic}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
      >
        <FaItalic />
      </ToolButton>
      <ToolButton
        isOn={isUnderline}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }}
      >
        <FaUnderline />
      </ToolButton>
      <ToolDivider />
      <ToolButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        }}
      >
        <FaAlignLeft />
      </ToolButton>
      <ToolButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        }}
      >
        <FaAlignCenter />
      </ToolButton>
      <ToolButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        }}
      >
        <FaAlignRight />
      </ToolButton>
      <ToolButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
        }}
      >
        <FaAlignJustify />
      </ToolButton>
      <ToolDivider />
    </ToolbarWrapper>
  );
}

export default Toolbar;
