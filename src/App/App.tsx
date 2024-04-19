import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import RegisterPage from 'pages/RegisterPage/RegisterPage'
import LoginPage from 'pages/LoginPage/LoginPage'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate replace={true} to="/login" />} />
      </Routes>
    </div>
  )
}

export default App
