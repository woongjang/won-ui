import React from 'react';
import WonThemeContext from '../WonThemeContext/WonThemeContext';
import { defaultTheme } from '../WonTheme/WonTheme';

function useWonTheme() {
  const themeCtx = React.useContext(WonThemeContext);
  return themeCtx ? themeCtx : defaultTheme
}

export default useWonTheme;