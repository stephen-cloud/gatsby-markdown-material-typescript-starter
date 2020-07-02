import React, { FC, useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./src/themes";

const App = ({ element }) => {
  const storedValue = localStorage.getItem("theme");

  return <ThemeProvider theme={theme[storedValue]}>{element}</ThemeProvider>;
};

export const wrapRootElement = ({ element }) => {
  const storedValue = localStorage.getItem("theme");
  console.log(storedValue);
  if (!storedValue) {
    localStorage.setItem("theme", "light");
  }
  return <App element={element} />;
};
