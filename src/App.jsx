import './App.css'
import React, { createContext, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider
} from 'react-router-dom';

//pages
import { Home } from "./pages/Home.jsx"
import { Stars } from "./pages/Stars.jsx"

//components
import Navbar from "./components/Navbar/navbar.jsx"
import Darkmode from "./components/Darkmode Toggle/darkmode-toggle.jsx"

export const ThemeContext = createContext(null);

function App(props) {

  //Saves dark mode state when refreshing
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  <head>
 <title>Your new name</title>
</head>

  //defining routes for pages
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/Stars" element={<Stars />} />
      </Route>
    )
  )

  //displays routes
  return (
    <ThemeContext.Provider>
      <div className="app" data-theme={theme}>
        <RouterProvider router={router} />
        <div className="switch">
          <Darkmode onClick={switchTheme}/>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

//where the navbar is called so it will show on all pages
const Root = () => {
  return (
    <>
      <div >
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
