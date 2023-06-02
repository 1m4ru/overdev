import React ,{ useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout';
import { Login } from './components/Login';
import Home from './components/Home/Index';


function App() {


  return (

<AuthProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/profile" element={<Home/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
</AuthProvider>

  )
}

export default App
