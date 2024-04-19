import React from 'react'

export interface UserLogin {
  email: string
  password: string
}

export interface LoginPageProps {
  title: string
  onLogin: (data: UserLogin) => void
}
