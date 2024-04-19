import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import RegisterPage from 'pages/RegisterPage/RegisterPage'
import LoginPage from 'pages/LoginPage/LoginPage'
import DashboardPage from 'pages/DashboardPage/DashboardPage'
import ForgetPasswordPage from 'pages/ForgetPasswordPage/ForgetPasswordPage'
import ChangePasswordPage from 'pages/ChangePasswordPage/ChangePasswordPage'

const App = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken')
    if (storedAccessToken) {
      setAccessToken(storedAccessToken)
    }
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {accessToken && <Route path="/dashboard" element={<DashboardPage />} />}
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/reset-password" element={<ChangePasswordPage />} />
        <Route path="/" element={<Navigate replace={true} to="/login" />} />
      </Routes>
    </div>
  )
}

export default App
