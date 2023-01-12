import React from 'react'
import SideNavbar from '../../components/sidebar'
import Head from 'next/head'
import CreateRequest from '../../components/createRequest'

const Create = () => {
  return (
    <div>
      <Head>
        <title>Dashboard Requester</title>
        <meta
          name="description"
          content="Venue Booking Application Dashboard"
        />
      </Head>
      <div>
        <SideNavbar />
      </div>
      <div className='ml-60 flex items-center justify-center h-screen '>
        <CreateRequest />
      </div>
    </div>
  )
}

export default Create