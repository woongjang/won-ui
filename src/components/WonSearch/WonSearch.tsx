import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import useWonTheme from '../theme/useWonTheme';
import { PropsWithTheme } from '../theme';

const SearchWrapper = styled.div<PropsWithTheme>`
  margin: 2px;
  box-sizing: border-box;
  position: relative;
  height: auto;
  width: 100%;
  min-width: 0;
  display: inline-flex;
  padding: 4px;
  font-size: 14px;
  border-radius: 10px;
  line-height: 1.57;
  background: #e9ecf0;
  :focus-within {
    margin: 0;
    border: 2px solid #000000;
    box-shadow: ${props => {
      const { wonTheme } = props;
      return `0 0 0 2px ${wonTheme.primaryDark}`;
    }};
    outline: 0;
    background: #fff;
  }
`;

const SearchIcon = styled(FiSearch)`
  font-size: 24px;
  color: #000;
  margin: 0 8px;
  align-self: center;
`;

const SearchInput = styled.input`
  padding: 0;
  border: none;
  outline: none;
  background-color: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 15px;
  width: 100%;
`;

interface WonSearchProps<T> {
  icon?: boolean;
  value: T;
}

function WonSearch<T>({ icon = true }: WonSearchProps<T>) {
  const theme = useWonTheme();
  return (
    <SearchWrapper wonTheme={theme}>
      {icon && <SearchIcon />}
      <SearchInput />
    </SearchWrapper>
  );
}

export default WonSearch;
