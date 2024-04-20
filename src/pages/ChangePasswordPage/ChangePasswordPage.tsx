import React, { useState } from 'react'
import ChangePasswordSection from 'common/components/organisms/ChangePasswordSection'
import FormLayout from 'common/components/templates/FormLayout'

interface FormData {
  password: string
  confirmPassword: string
}

const ChangePasswordPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async () => {
    try {
      const token = new URLSearchParams(window.location.search).get('token')
      const requestData = {
        password: formData.password,
        tokenId: token,
      }

      const response = await fetch(
        'https://asia-northeast1-willeder-official.cloudfunctions.net/api/auth/password/reset',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        }
      )

      if (response.ok) {
        console.log('Password changed successfully')
      } else {
        const errorMessage = await response.text()
        console.error('Failed to change password:', errorMessage)
      }
    } catch (error) {
      console.error('Failed to change password:', error)
    }
  }

  return (
    <FormLayout>
      <ChangePasswordSection
        title="Reset Password"
        onChange={handleChange}
        data={formData}
        onSubmit={handleSubmit}
      />
    </FormLayout>
  )
}

export default ChangePasswordPage
