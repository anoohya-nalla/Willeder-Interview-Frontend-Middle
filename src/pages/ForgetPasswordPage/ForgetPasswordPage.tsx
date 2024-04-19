import React, { useState } from 'react'
import ForgetPasswordSection from '../../common/components/organisms/ForgetPasswordSection'
import FormLayout from 'common/components/templates/FormLayout'

const ForgetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async () => {
    console.log('Email:', email)
    try {
      const response = await fetch(
        'https://asia-northeast1-willeder-official.cloudfunctions.net/api/auth/password/forgot',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
        }
      )

      if (response.ok) {
        window.alert('Password reset link sent to your email!')
      }
    } catch (error) {
      console.error('Forget password failed')
    }
  }

  return (
    <FormLayout>
      <ForgetPasswordSection
        onChange={handleChange}
        onSubmit={handleSubmit}
        data={email}
      />
    </FormLayout>
  )
}

export default ForgetPasswordPage
