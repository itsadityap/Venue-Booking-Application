import React from 'react'
import SideNavbar from '../../components/sidebar'
import CardRequester from '../../components/CardRequester'
import Head from 'next/head'

const pending = () => {
  return(
    <div>
      <Head>
        <title>Dashboard Requester | Pending</title>
        <meta
          name="description"
          content="Venue Booking Application Dashboard"
        />
      </Head>
      <div>
        <SideNavbar />
      </div>
      <div className='flex flex-row flex-wrap ml-64 mt-5 items-center rounded-full'>
        <CardRequester />
      </div>
    </div>
  )
}

export default pending