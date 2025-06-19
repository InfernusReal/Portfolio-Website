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
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Eclipse" element={<EclipseRoute />} />
        <Route path="/Infernal" element={<InfernalRoute/>}/>
        <Route path="/Praised" element={<Praisedroute/>} />
        
      </Routes>
       <Analytics />
    </>
  )
}

export default App
