import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// No StrictMode: the 3D background's gltfjsx `--instance` geometry (see
// src/components/Background/Computers.tsx) is built once on mount and does
// not survive StrictMode's dev-only double mount/unmount/remount cycle —
// the shared useGLTF cache's geometry gets disposed on the first unmount,
// so the second mount renders nothing (no error, just a blank canvas).
createRoot(document.getElementById('root')!).render(<App />)
