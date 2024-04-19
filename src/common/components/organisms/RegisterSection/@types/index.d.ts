interface UserRegister {
  email: string
  password: string
  name: string
  address: string
  phone: number
}

interface RegisterSectionProps {
  title: string
  onSignup: (data: UserRegister) => void
}
