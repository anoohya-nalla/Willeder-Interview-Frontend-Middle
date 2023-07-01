import React from 'react'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import { Title, Anchor, Text } from '@mantine/core'

import './ForgetPasswordSection.scss'

interface ForgetFormProps {
  data: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: () => void
}

const ForgetPasswordSection = ({
  onChange,
  onSubmit,
  data,
}: ForgetFormProps) => {
  return (
    <form className="forget-password">
      <Title order={3} ta={'center'}>
        Title
      </Title>
      <Input
        placeholder={'placeholder'}
        onChange={onChange}
        label={'Forget Password'}
        value={data}
        type={'text'}
        name="forgetPassword"
      />
      <div className="button-wrapper">
        <Button onClick={onSubmit} fullWidth>
          Submit
        </Button>
      </div>
      <Anchor href={''}>
        <Text ta={'right'} color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
          Hello
        </Text>
      </Anchor>
    </form>
  )
}

export default ForgetPasswordSection