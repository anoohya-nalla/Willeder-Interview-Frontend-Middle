import React, { useState, useEffect } from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import Table from 'common/components/atoms/Table'

const DashboardTable = () => {
  const [data, setData] = useState<Person[]>([])
  const token = localStorage.getItem('accessToken')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://asia-northeast1-willeder-official.cloudfunctions.net/api/lists?page=0&size=1',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        )
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`)
        }

        const responseData = await response.json()
        setData(responseData.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, []) // Empty dependency array to fetch data only once

  return <div>{data && <Table data={data} columns={columns} />}</div>
}

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('passengerName', {
    header: () => 'Name',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('airlineName', {
    header: () => 'Airline',
    cell: (info) => info.renderValue(),
  }),

  columnHelper.accessor('trips', {
    header: () => 'Trips',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('airlineHeadQuaters', {
    header: () => <span>Head Quaters</span>,
    cell: (info) => info.renderValue(),
  }),
]

export default DashboardTable
