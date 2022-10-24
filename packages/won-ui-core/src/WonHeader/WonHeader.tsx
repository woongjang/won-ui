import React, { PropsWithChildren } from 'react';

import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
`;

const ContentsWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  height: auto;
  min-height: 50px;
`;

interface Props {}

function WonHeader({ children }: PropsWithChildren<Props>) {
  return (
    <HeaderContainer>
      <ContentsWrapper>{children}</ContentsWrapper>
    </HeaderContainer>
  );
}

export default WonHeader;
