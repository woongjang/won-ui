import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const SiderNavContainer = styled.aside<Props>`
  background-color: #f2f6fc;
  flex: 0 0 200px;
  width: ${(props) => props.width || '200px'};
`;

const NavContentsWrapper = styled.div<Props>`
  width: inherit;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 30px;
  outline: 0px;
  left: 0px;
  height: 100%;
`;

interface Props {
  className?: string;
  width?: number;
  top?: number;
}

function WonSider({ children, className, width }: PropsWithChildren<Props>) {
  return (
    <SiderNavContainer className={className || ''} width={width}>
      <NavContentsWrapper>{children}</NavContentsWrapper>
    </SiderNavContainer>
  );
}

export default WonSider;
