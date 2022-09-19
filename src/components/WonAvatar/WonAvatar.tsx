import React from 'react';
import styled from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';

export interface WonAvatarProps {
  alt?: string;
  src?: string;
  className?: string;
}

const Avatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  line-height: 1;
  border-radius: 50%;
`;

function WonAvatar({ alt = 'profile', src, className }: WonAvatarProps) {
  return (
    <Avatar className={className || ''}>
      {src ? <img alt={alt} src={src} /> : <BsPersonCircle />}
    </Avatar>
  )
}

export default WonAvatar;
