import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { SignInPage } from '../features/auth/pages/SignInPage'
import { SignUpPage } from '../features/auth/pages/SignUpPage'
import { DashboardPage } from '../features/dashboard/pages/DashboardPage'
import { NotFoundPage } from '../features/not-found/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/sign-in" replace /> },
      { path: 'sign-in', element: <SignInPage /> },
      { path: 'sign-up', element: <SignUpPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])
