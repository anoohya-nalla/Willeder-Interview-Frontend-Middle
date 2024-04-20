import React from 'react'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'
import './LoginForm.scss'
import Text from 'common/components/atoms/Text'
import { Anchor } from '@mantine/core'
import { useForm } from '@mantine/form'

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const form = useForm({
    initialValues: {
      password: '',
      email: '',
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  return (
    <form
      className="login-form"
      onSubmit={form.onSubmit(() => {
        onSubmit(form.values)
      })}
    >
      <Input
        placeholder={'Enter your username'}
        label={'Email/Username'}
        type={'text'}
        {...form.getInputProps('email')}
      />
      <Input
        placeholder={'Enter your password'}
        label={'Password'}
        type={'password'}
        {...form.getInputProps('password')}
      />
      <Anchor href={'/forgot-password'}>
        <Text ta={'right'} color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
          Forgot Password
        </Text>
      </Anchor>
      <div className="button-wrapper">
        <Button fullWidth type="submit">
          Submit
        </Button>
      </div>
      <div className="signup-container">
        <Text fz={'xxs'}>Don’t have an account yet?</Text>
        <Anchor className="signup-anchor" href={'/register'}>
          <Text color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
            Sign up
          </Text>
        </Anchor>
      </div>
    </form>
  )
}

export default LoginForm
