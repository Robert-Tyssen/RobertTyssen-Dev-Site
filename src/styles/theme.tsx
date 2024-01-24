import { Montserrat } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic",],
});

const appTheme = createTheme({
  palette: {
    background: {
      default: '#f0f0f0',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: `${montserrat.style.fontFamily}, Arial`,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
    }
  },
});

export default appTheme;