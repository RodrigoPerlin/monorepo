import { ThemeProvider } from "styled-components";
import { theme } from "./themes/index";
import Button from "./components/Button";
const App = () => (
  <ThemeProvider theme={theme}>
    <Button background="red">Olas</Button>
  </ThemeProvider>
);
export default App;
