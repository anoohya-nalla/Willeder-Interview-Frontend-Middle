interface UserLogin {
  email: string
  password: string
}
interface LoginSectionProps {
  title: string
  onLogin: (data: UserLogin) => void
}
