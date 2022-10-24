import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface GridItemProps {
  size: number | 'auto';
  flex?: string;
}

const GridItem = styled.div<GridItemProps>`
  display: block;
  ${(props) => {
    const { size, flex: flexProps } = props;
    const columnSize = size === 'auto' ? 'auto' : `${(size / 24) * 100}%`;
    let flex = `0 0 ${columnSize}`;
    if (flexProps) flex = flexProps;
    return {
      flex,
      ...(columnSize !== 'auto' && { 'max-width': columnSize }),
    };
  }}
`;

interface Props {
  size?: number;
  flex?: string;
  className?: string
}

function WonGridItem(props: PropsWithChildren<Props>) {
  const { size = 'auto', flex, className, children } = props;
  return (
    <GridItem className={className} size={size} flex={flex}>
      {children}
    </GridItem>
  );
}

export default WonGridItem;
