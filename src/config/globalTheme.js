import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  // typography: {
  //   fontFamily: 'quicksand, Arial',
  // },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': [quicksand],
  //     },
  //   },
  // },

  // MuiMenu: {
  //   list: {
  //       backgroundColor: "white",
  //   },
  // },

  palette: {
    primary: {
      main: "#a64893",
    },
    secondary: {
      main: '#ffcd36',
    },
    buttonHover:"#e4bd47",
    topHeading:"#4b4b4d"
  },
});
