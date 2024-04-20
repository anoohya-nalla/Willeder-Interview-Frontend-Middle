import React from 'react'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'

import './ChangePasswordForm.scss'

const ChangePasswordForm = ({
  onChange,
  data,
  onSubmit,
}: ChangePasswordFormProps) => {
  return (
    <form className="change-password-form">
      <Input
        placeholder={'Enter your password'}
        onChange={onChange}
        label={'Password'}
        value={data.password}
        type={'password'}
        name="password"
      />
      <Input
        placeholder={'Enter your password again'}
        onChange={onChange}
        label={'Confirm Password'}
        value={data.confirmPassword}
        type="password"
        name={'confirmPassword'}
      />
      <div className="button-wrapper">
        <Button onClick={onSubmit} fullWidth>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default ChangePasswordForm
