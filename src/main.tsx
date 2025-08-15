import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GameApp } from "./GameApp.tsx";
import { Providers } from "./Providers.tsx";
import GlobalStyle from "./styles/GlobalStyle.ts";

import "@fontsource-variable/grandstander";
import "@fontsource/poppins";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <GlobalStyle />
      <Toaster position="top-right" />
      <GameApp />
    </Providers>
  </StrictMode>
);
