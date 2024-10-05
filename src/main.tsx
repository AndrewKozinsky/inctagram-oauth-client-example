import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './pages/App.tsx'
import GithubPage from './pages/GithubPage.tsx'
import GooglePage from './pages/GooglePage.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/github",
        element: <GithubPage />,
    },
    {
        path: "/google",
        element: <GooglePage />,
    },
]);

createRoot(document.getElementById('root')!).render(
      <RouterProvider router={router} />
)
