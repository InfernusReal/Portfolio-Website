import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Analytics } from '@vercel/analytics/react';
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import { Routes, Route } from "react-router-dom";
import EclipseRoute from './components/EclipseRoute/EclipseRoute';
import InfernalRoute from './components/InfernalRoute/InfernalRoute'
import Praisedroute from './components/PraisedRoute/Praised'
import NavBar from './components/Navbar';
import Contact from './components/Contact.jsx';
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Eclipse" element={<EclipseRoute />} />
        <Route path="/Infernal" element={<InfernalRoute/>}/>
        <Route path="/Praised" element={<Praisedroute/>} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
       <Analytics />
       <SpeedInsights />

    </>
  )
}

export default App
