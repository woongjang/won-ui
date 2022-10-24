import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export type AlignOptionKeys = 'start' | 'center' | 'end';
export type JustifyOptionKeys =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export const alignOptions: Record<AlignOptionKeys, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

export const justifyOptions: Record<JustifyOptionKeys, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  'space-around': 'space-around',
  'space-between': 'space-between',
  'space-evenly': 'space-evenly',
};

export interface GridProps {
  align: AlignOptionKeys;
  justify: JustifyOptionKeys;
  wrap?: boolean;
}

const Grid = styled.div<GridProps>`
  display: flex;
  flex-flow: row ${props => (props.wrap ? 'wrap' : 'nowrap')};
  min-width: 0;
  box-sizing: border-box;
  ${props => {
    const { align, justify } = props;
    return {
      'align-items': alignOptions[align],
      'justify-content': justifyOptions[justify],
    };
  }}
`;

interface Props {
  align?: AlignOptionKeys;
  justify?: JustifyOptionKeys;
  wrap?: boolean;
  className?: string;
}

function WonGrid(props: PropsWithChildren<Props>) {
  const { align = 'start', justify = 'start', wrap, className, children } = props;
  return (
    <Grid className={className} align={align} justify={justify} wrap={wrap}>
      {children}
    </Grid>
  );
}

export default WonGrid;
