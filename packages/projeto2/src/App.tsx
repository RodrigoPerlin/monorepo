import { ThemeProvider } from "styled-components";
import { theme } from "./themes/index";
import Button from "./components/Button";
import React from "react";
const App = () => (
  <ThemeProvider theme={theme}>
    <Button background="red">Olaaaa</Button>esse tests
  </ThemeProvider>
);
export default App;
