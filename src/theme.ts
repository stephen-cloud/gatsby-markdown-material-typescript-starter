import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";
import { blue, green, red, purple, blueGrey, indigo, pink, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "light",
    // primary: {
    //   main: green[200],
    // },
    // secondary: {
    //   main: indigo[500],
    // },
  },
});

export default theme;
