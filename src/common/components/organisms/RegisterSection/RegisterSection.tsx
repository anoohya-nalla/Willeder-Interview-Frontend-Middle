import React from 'react'
import RegisterForm from 'common/components/molecules/RegisterForm'
import { Title } from '@mantine/core'
import './RegisterSection.scss'

const RegisterSection = ({ title, onSignup }: RegisterSectionProps) => {
  return (
    <section className="register-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <RegisterForm onSubmit={onSignup} />
    </section>
  )
}

export default RegisterSection
