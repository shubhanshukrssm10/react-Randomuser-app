import React from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<><Navbar/> <Home/> </>
    },

    {
      path: '/about',
      element: <> <Navbar /> <About/> </>
    },

    {
      path: '/contact',
      element:<><Navbar /> <Contact/> </>
    },
  ])


  return (
     <>   
     <RouterProvider router={router} />
     </>


  )
}

export default App




