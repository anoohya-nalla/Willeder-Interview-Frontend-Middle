interface changePasswordProps {
  confirmPassword: string
  password: string
}
interface ChangePasswordFormProps {
  data: changePasswordProps
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: () => void
}
