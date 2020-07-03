import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";
import { blue, green, red, purple, blueGrey, indigo, pink, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[100],
    },
    secondary: {
      main: green[500]
    },
  },
});

export default theme;
