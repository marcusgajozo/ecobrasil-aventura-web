import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GameApp } from "./GameApp.tsx";
import { Providers } from "./Providers.tsx";
import "./styles/global.css";

import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <Toaster position="top-right" />
      <GameApp />
    </Providers>
  </StrictMode>
);
