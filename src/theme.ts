import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#133A6F',
    },
    success: {
      main: '#03D69D',
    },
    text: {
      primary: '#4D4D4D',
      secondary: '#AFAFAF'
    }
  },
  typography: {
    allVariants: {
      fontFamily: 'Nunito',
    },
  }
});


export default theme