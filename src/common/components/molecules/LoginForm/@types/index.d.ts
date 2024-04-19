interface UserLogin {
  email: string
  password: string
}

interface LoginFormProps {
  onSubmit: (data: UserLogin) => void
}
