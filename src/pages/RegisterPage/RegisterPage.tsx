import React from 'react'
import RegisterSection from '../../common/components/organisms/RegisterSection'
import FormLayout from 'common/components/templates/FormLayout'

const RegisterPage = () => {
  const handleSignup = async (values: {
    email: string
    password: string
    name: string
    address: string
    phone: string
  }) => {
    try {
      const phoneNumber =
        typeof values.phone === 'string' ? Number(values.phone) : values.phone

      const response = await fetch(
        'https://asia-northeast1-willeder-official.cloudfunctions.net/api/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...values,
            phone: phoneNumber,
          }),
        }
      )

      if (response.ok) {
        window.alert('User registered, Please Login')
        window.location.href = '/login'
      } else {
        const responseData = await response.json()
        window.alert(responseData.errorMessage)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <FormLayout>
        <RegisterSection title="Register" onSignup={handleSignup} />
      </FormLayout>
    </>
  )
}

export default RegisterPage
