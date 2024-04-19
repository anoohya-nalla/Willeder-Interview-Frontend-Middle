import React from 'react'
import LoginForm from 'common/components/molecules/LoginForm'
import { Title } from '@mantine/core'
import './LoginSection.scss'

const LoginSection = ({ title, onLogin }: LoginSectionProps) => {
  return (
    <section className="login-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <LoginForm onSubmit={onLogin} />
    </section>
  )
}

export default LoginSection
