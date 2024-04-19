interface UserRegister {
  email: string
  password: string
  name: string
  address: string
  phone: string
}

interface RegisterFormProps {
  onSubmit: (data: UserRegister) => void
}
