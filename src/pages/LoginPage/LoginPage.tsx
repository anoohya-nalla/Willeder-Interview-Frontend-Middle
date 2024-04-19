import React, { useState } from 'react'
import LoginSection from '../../common/components/organisms/LoginSection'
import FormLayout from 'common/components/templates/FormLayout'
import DashboardPage from 'pages/DashboardPage/DashboardPage'

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const response = await fetch(
        'https://asia-northeast1-willeder-official.cloudfunctions.net/api/auth/login',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      )

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      console.log('Login successful:', data)
      const accessToken = data.accessToken
      const refreshToken = data.refreshToken

      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      setIsLoggedIn(true)
      window.location.href = '/dashboard'
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      {isLoggedIn ? (
        <DashboardPage />
      ) : (
        <FormLayout>
          <LoginSection title="Login" onLogin={handleLogin} />
        </FormLayout>
      )}
    </>
  )
}

export default LoginPage
