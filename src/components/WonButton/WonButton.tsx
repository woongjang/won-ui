import React from 'react';

export interface WonButtonProps {
  label: string;
}

function WonButton(props: WonButtonProps) {
  return <button>{props.label}</button>;
}

export default WonButton;
