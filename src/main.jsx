import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1551045304.
import Homepage from './routes/homepage/Homepage.jsx'
import SignInPage from './routes/SignInPage/SignInPage.jsx'
import SignUpPage from './routes/SignUpPage/SignUpPage.jsx'
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <Homepage/>,
    
  },
  {
    path: '/signin',
    element: 
    <SignInPage/>,
    
  },
  {
    path: '/signup',
    element: 
    <SignUpPage/>,
    
  },
  {
    path: '/dashboard',
    children: [
      {path: '/dashboard', element: <DashboardPage/>},
      {path:"/dashboard/chats/:id", element:<ChatPage/>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
