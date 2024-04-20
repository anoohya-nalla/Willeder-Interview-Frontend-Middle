import React from 'react'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'
import './RegisterForm.scss'
import Text from 'common/components/atoms/Text'
import { Anchor } from '@mantine/core'
import { useForm } from '@mantine/form'

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const form = useForm({
    initialValues: {
      password: '',
      email: '',
      name: '',
      address: '',
      phone: '',
    },
    validate: {
      email: (value) =>
        !value
          ? 'Email is required'
          : /^\S+@\S+$/.test(value)
          ? null
          : 'Invalid email',
      password: (value) =>
        !value
          ? 'Password is required'
          : /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/.test(
              value
            )
          ? null
          : 'Invalid password',
      name: (value) => (!value ? 'Name is required' : null),
      address: (value) => (!value ? 'Address is required' : null),
      phone: (value) => {
        if (!value) return 'Phone is required'
        if (!/^\d{10}$/.test(value)) return 'Phone must have exactly 10 digits'
        return null
      },
    },
  })

  return (
    <form
      className="register-form"
      onSubmit={form.onSubmit(() => {
        onSubmit(form.values)
      })}
    >
      <Input
        placeholder={'Enter your e-mail address'}
        label={'Email'}
        type={'text'}
        error={form.errors.email}
        {...form.getInputProps('email')}
      />
      <Input
        placeholder={'Enter your password'}
        label={'Password'}
        type={'password'}
        error={form.errors.password}
        {...form.getInputProps('password')}
      />
      <Input
        placeholder={'Enter your name'}
        label={'Name'}
        type={'text'}
        error={form.errors.name}
        {...form.getInputProps('name')}
      />
      <Input
        placeholder={'Enter your address'}
        label={'Address'}
        type={'text'}
        error={form.errors.address}
        {...form.getInputProps('address')}
      />
      <Input
        placeholder={'Enter your phone number'}
        label={'Phone'}
        type={'text'}
        error={form.errors.phone}
        {...form.getInputProps('phone')}
      />
      <div className="button-wrapper">
        <Button fullWidth type="submit">
          Submit
        </Button>
      </div>
      <div className="login-container">
        <Text fz={'xxs'}>Already have an account?</Text>
        <Anchor className="login-anchor" href={'/login'}>
          <Text
            ta={'right'}
            color="blue.5"
            td={'underline'}
            fw={700}
            fz={'xxs'}
          >
            Login
          </Text>
        </Anchor>
      </div>
    </form>
  )
}

export default RegisterForm
