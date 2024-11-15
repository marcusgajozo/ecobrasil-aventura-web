import { ThemeProvider } from "styled-components";
import Game from "./components/Game";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Game />;
    </ThemeProvider>
  );
};
export default App;
