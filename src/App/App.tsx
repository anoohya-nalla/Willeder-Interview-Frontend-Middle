import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import useToken from '../common/hooks/useToken' // Import the useToken hook
import RegisterPage from 'pages/RegisterPage/RegisterPage'
import LoginPage from 'pages/LoginPage/LoginPage'
import DashboardPage from 'pages/DashboardPage/DashboardPage'
import ForgotPasswordPage from 'pages/ForgotPasswordPage/ForgotPasswordPage'
import ChangePasswordPage from 'pages/ChangePasswordPage/ChangePasswordPage'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ChangePasswordPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

const Home = () => {
  const { isLoggedIn } = useToken()
  const navigate = useNavigate()

  // Redirect to login page if not logged in
  if (!isLoggedIn) {
    navigate('/login', { replace: true })
    return null // Return null to prevent further execution
  }

  // Redirect to dashboard if logged in
  navigate('/dashboard', { replace: true })

  return null // This component doesn't render anything
}

export default App
