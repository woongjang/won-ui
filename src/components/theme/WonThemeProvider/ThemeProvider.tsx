import React from 'react';
import WonThemeContext from '../WonThemeContext/WonThemeContext';
import useWonTheme from '../useWonTheme';
import WonTheme from '../WonTheme';

export interface WonThemeProviderProps {
  theme?: WonTheme;
}

function WonThemeProvider(props: React.PropsWithChildren<WonThemeProviderProps>) {
  const { children, theme: propTheme } = props;
  const wonThemeCtx = useWonTheme();
  const theme = React.useMemo(() => {
    if (propTheme === undefined) {
      return wonThemeCtx;
    }
    return {
      ...wonThemeCtx,
      propTheme,
    }
  }, [propTheme]);

  return (
    <WonThemeContext.Provider value={theme}>{children}</WonThemeContext.Provider>
  )
}

export default WonThemeProvider;
