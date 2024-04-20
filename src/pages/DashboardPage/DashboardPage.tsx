import DashboardTable from 'common/components/molecules/DashboardTable'
import React from 'react'
import { Anchor } from '@mantine/core'
import Text from 'common/components/atoms/Text'

const DashboardPage = () => {
  return (
    <div>
      <Anchor href={'/reset-password'}>
        <Text ta={'right'} color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
          Change Password
        </Text>
      </Anchor>
      <DashboardTable />
    </div>
  )
}

export default DashboardPage
