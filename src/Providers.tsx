import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { FirstTimePlayingProvider } from "./context/FirstTimePlaying";

export const Providers = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider theme={theme}>
      <FirstTimePlayingProvider>{children}</FirstTimePlayingProvider>
    </ThemeProvider>
  );
};
