import React from 'react';
import styled from 'styled-components';

import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getRoot, $getSelection, EditorState } from 'lexical';
import Toolbar from './Toolbar';
import { useWonTheme, WonTheme } from '../theme';

const EditorWrapper = styled.div<{ wonTheme: WonTheme }>`
  margin: 20px auto;
  border: 1px solid black;
  border-radius: 5px;
  .editor {
    border: 1px solid black;
  }
  position: relative;
  color: black;
`;

function onChange(editorState: EditorState) {
  editorState.read(() => {
    const root = $getRoot();
    const selection = $getSelection();
    console.log(root, selection);
  });
}

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  React.useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

function onError(error: Error) {
  console.error(error);
}

function WonEditor() {
  const initialConfig = {
    namespace: 'WonEditor',
    onError,
  };
  const theme = useWonTheme();
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <EditorWrapper wonTheme={theme}>
        <Toolbar />
        <RichTextPlugin contentEditable={<ContentEditable />} placeholder=""/>
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <MyCustomAutoFocusPlugin />
      </EditorWrapper>
    </LexicalComposer>
  );
}

export default WonEditor;
