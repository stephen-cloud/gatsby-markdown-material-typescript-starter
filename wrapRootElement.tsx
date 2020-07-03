import React, { FC, useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./src/theme";

const App = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export const wrapRootElement = ({ element }) => {
  return <App element={element} />;
};
