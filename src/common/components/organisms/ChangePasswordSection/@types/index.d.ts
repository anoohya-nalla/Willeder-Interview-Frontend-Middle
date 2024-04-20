interface changePasswordProps {
  confirmPassword: string
  password: string
}
interface ChangePasswordSectionProps {
  title: string
  data: changePasswordProps
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: () => void
}
