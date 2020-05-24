import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Index from './Pages/Index'


function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

	const theme = React.useMemo(
	() =>
	  createMuiTheme({
	    palette: {
	      type: prefersDarkMode ? 'light' : 'light',
	    },
	  }),
	[prefersDarkMode],
	);
	return (
		<ThemeProvider theme={theme}>
	      <Index />
	    </ThemeProvider>
	);
}

export default App;
