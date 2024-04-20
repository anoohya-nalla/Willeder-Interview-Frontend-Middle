import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginSection from '../../common/components/organisms/LoginSection'
import FormLayout from 'common/components/templates/FormLayout'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()

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
      const data = await response.json()

      if (response.ok) {
        const accessToken = data.accessToken
        const refreshToken = data.refreshToken

        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)

        navigate('/dashboard')
      } else {
        window.alert(data.errorMessage)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <FormLayout>
        <LoginSection title="Login" onLogin={handleLogin} />
      </FormLayout>
    </>
  )
}

export default LoginPage
