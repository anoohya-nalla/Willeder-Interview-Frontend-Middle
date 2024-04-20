import DashboardTable from 'common/components/molecules/DashboardTable'
import React from 'react'
import { Anchor } from '@mantine/core'
import Text from 'common/components/atoms/Text'
import Button from 'common/components/atoms/Button'
import { useNavigate } from 'react-router-dom'
import './DashboardPage.scss'

const DashboardPage = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')

      await fetch(
        'https://asia-northeast1-willeder-official.cloudfunctions.net/api/auth/logout',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')

      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <div>
      <div className="container">
        <div className="reset-password-container">
          <Anchor href={'/reset-password'}>
            <Text
              ta={'right'}
              color="blue.5"
              td={'underline'}
              fw={700}
              fz={'xxs'}
            >
              Change Password
            </Text>
          </Anchor>
        </div>

        <div className="logout-button-container">
          <Button onClick={handleLogout}>Log out</Button>
        </div>
      </div>

      <DashboardTable />
    </div>
  )
}

export default DashboardPage
