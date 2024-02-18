import { useState } from 'react'
import { useNavigate,createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from "./Comp/Landingfr"
import Doch from "./Comp/Doch"
import './App.css'


const router=createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path:"/Doch",
    element: <Doch />
  }
])
function App() {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
