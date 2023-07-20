import { createTheme } from '@mui/material';

const PRIMARY_COLOR = '#6B61B6';
const PRIMARY_COLOR_LIGHT = '#8178C1';

const theme = createTheme({
  // customize theme colors
  palette: {
    primary: {
      main: PRIMARY_COLOR,
      light: PRIMARY_COLOR_LIGHT,
    },
  },
  //   customize buttons to have gradient background color unless they are disabled
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState: state }) => ({
          background: state.disabled
            ? 'none'
            : `linear-gradient(85deg,${PRIMARY_COLOR} 40%, ${PRIMARY_COLOR_LIGHT} 90%)`,
        }),
      },
    },
  },
});

export default theme;
