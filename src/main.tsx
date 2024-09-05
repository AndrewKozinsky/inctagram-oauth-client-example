import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './pages/App.tsx'
import Githab from './pages/Githab.tsx'
import Google from './pages/Google.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/github",
        element: <Githab />,
    },
    {
        path: "/google",
        element: <Google />,
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
