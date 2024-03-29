import { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './RootLayout'
import NotFound from './pages/NotFound'
import Landing from './pages/Landing'
import ContactCard, { createAction } from './components/ContactCard'
import Build from './pages/Build'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="home" element={<Landing />} />
      <Route path="landing" element={<Landing />} action={createAction}/>
      <Route path="/" element={<Navigate to="landing"/>} />
      <Route path='contactcard' element={<ContactCard />} />
      <Route path="about" element={<About />} />
      <Route path="build" element={<Build />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
