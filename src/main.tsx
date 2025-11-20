import '@/styles/globals.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GameApp } from './game-app.tsx'
import { ScreenSizeWarning } from './components/screen-size-warning'

import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScreenSizeWarning />
    <Toaster position="top-right" />
    <GameApp />
  </StrictMode>
)
