import { css } from '@emotion/react';
import { CSSProperties } from 'react';

export const stackStyle = ({
  direction,
  align,
  justify,
}: {
  direction: CSSProperties['flexDirection'];
  align: CSSProperties['alignItems'];
  justify: CSSProperties['justifyContent'];
}) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${align};
`;
