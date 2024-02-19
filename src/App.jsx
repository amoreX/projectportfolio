import { useState } from 'react'
import { useNavigate,createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from "./Comp/Landingfr"
import Doch from "./Comp/Doch/Doch"
import Calc from "./Comp/Calc/Calc"
import Weather from './Comp/Weather/Weather'
import Git from './Comp/Git/git'
import Wpm from './Comp/Wpm/Wpm'
import Me from './Comp/Me/Me'
import './App.css'


const router=createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path:"/Doch",
    element: <Doch />
  },
  {
    path:"/Calc",
    element:<Calc />
  },
  {
    path:"/Weather",
    element:<Weather />
  },
  {
    path:"/git",
    element:<Git />
  },
  {
    path:"/wpm",
    element:<Wpm />
  },
  {
    path:"/Me",
    element:<Me />
  }

])
sessionStorage.setItem('checking', "nul");
function App() {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
