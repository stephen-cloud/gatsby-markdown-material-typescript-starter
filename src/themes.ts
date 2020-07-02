import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

const light = createMuiTheme({
  palette: {
    type: "light",
  },
});

const dark = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const themes = { light, dark };

export default themes;
