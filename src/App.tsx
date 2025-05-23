import { ThemeProvider } from "styled-components";
import Game from "./screens/Game";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

import "@fontsource/poppins";
import "@fontsource-variable/grandstander";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Game />;
    </ThemeProvider>
  );
};
export default App;
