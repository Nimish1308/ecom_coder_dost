import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Home />
    )
  },

  {
    path: '/login',
    element: (
      <LoginPage />
    )
  },

   {
    path: '/signup',
    element: (
      <SignupPage />
    )
  },

  


])
function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
