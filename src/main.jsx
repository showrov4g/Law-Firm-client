import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
