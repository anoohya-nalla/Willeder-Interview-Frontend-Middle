import React from 'react'
import Button from 'common/components/atoms/Button'
import Input from 'common/components/atoms/Input'
import { Title, Anchor, Text } from '@mantine/core'

import './ForgotPasswordSection.scss'

const ForgotPasswordSection = ({
  onChange,
  onSubmit,
  data,
}: ForgotFormProps) => {
  return (
    <form className="forgot-password">
      <Title order={3} ta={'center'}>
        Forgot Password
      </Title>
      <Input
        placeholder={'Enter your username'}
        onChange={onChange}
        label={'Email/Username'}
        value={data}
        type={'text'}
        name="forgotPassword"
      />
      <div className="button-wrapper">
        <Button onClick={onSubmit} fullWidth>
          Submit
        </Button>
      </div>
      <Anchor href={'/login'}>
        <Text ta={'right'} color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
          Back to Login
        </Text>
      </Anchor>
    </form>
  )
}

export default ForgotPasswordSection
