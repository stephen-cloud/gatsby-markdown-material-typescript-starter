import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";
import { blue, green, red, purple, blueGrey, indigo, pink, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: indigo[400],
    },
    secondary: {
      main: green[700]
    },
  },
});

export default theme;
