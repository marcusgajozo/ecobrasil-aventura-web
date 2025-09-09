import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { FirstTimePlayingProvider } from "./lib/context/FirstTimePlaying";
import GlobalStyle from "./styles/GlobalStyle";

export const Providers = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FirstTimePlayingProvider>{children}</FirstTimePlayingProvider>
    </ThemeProvider>
  );
};
