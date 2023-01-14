import React from 'react'
import SideNavbar from '../../components/sidebar'
import Head from 'next/head'
import CreateRequest from '../../components/createRequest'

const Create = () => {
  return (
    <div>
      <Head>
        <title>Dashboard Requester | Create</title>
        <meta
          name="description"
          content="Venue Booking Application Dashboard"
        />
      </Head>
      <div>
        <SideNavbar />
      </div>
      <div className='flex flex-row flex-wrap ml-64 mt-5 items-center rounded-full'>
        <CreateRequest />
      </div>
    </div>
  )
}

export default Create