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
        {...form.getInputProps('email')}
      />
      <Input
        placeholder={'Enter your password'}
        label={'Password'}
        type={'password'}
        {...form.getInputProps('password')}
      />
      <Input
        placeholder={'Enter your name'}
        label={'Name'}
        type={'name'}
        {...form.getInputProps('name')}
      />
      <Input
        placeholder={'Enter your address'}
        label={'Address'}
        type={'address'}
        {...form.getInputProps('address')}
      />
      <Input
        placeholder={'Enter your phone number'}
        label={'Phone'}
        type={'phone'}
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
