import { ThemeOptions, createTheme } from "@mui/material/styles";

const CustomTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#11A1F2"
    },
    secondary: {
      main: "#7D9EB5"
    },
    success: {
      main: "#05C180"
    },
    warning: {
      main: "#FF9931"
    },
    info: {
      main: "#5A75F8"
    },
    error:{
      main:"#EF2631"
    },
    text: {
      primary: "#353b43",
      secondary: "#7D9EB5"
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: '"Roboto", "Circular", sans-serif',
    fontWeightRegular: 300,
    button: {
      textTransform: "none"
    },
    body1: {
      fontWeight: 400
    },
    h5: {
      fontWeight: "bold"
    }
  }
});

export default CustomTheme;
