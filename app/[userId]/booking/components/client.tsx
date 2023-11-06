'use client'

import { FC } from 'react'

import { DataTable } from '@/components/ui/data-table'
import { Column, columns } from './columns'

interface ClientProps {
  data: Column[]
}

const Client: FC<ClientProps> = ({ data }) => {
  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <h1 className='tracking-tight text-3xl font-semibold'>
            Booking ({data.length})
          </h1>
          <p>Manage your booking room</p>
        </div>
      </div>

      <hr className='my-6' />
      <DataTable searchKey='roomName' columns={columns} data={data} />
    </div>
  )
}

export default Client
