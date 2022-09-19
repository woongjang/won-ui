import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Layout = styled.section<WonLayoutProps>`
  display: flex;
  flex: auto;
  flex-direction: ${props => props.flowDirection};
  background: #fff;
`;

export interface WonLayoutProps {
  flowDirection?: string;
}

function WonLayout({ children, flowDirection = 'column' }: PropsWithChildren<WonLayoutProps>) {
  return <Layout flowDirection={flowDirection}>{children}</Layout>;
}

export default WonLayout;
