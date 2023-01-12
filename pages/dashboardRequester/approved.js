import React from 'react'
import SideNavbar from '../../components/sidebar'
import CardRequester from '../../components/CardRequester'
import Head from 'next/head'

const approved = () => {
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
      <div className='ml-60 flex items-center justify-center h-screen'>
        <CardRequester />
      </div>
    </div>
  )
}

export default approved