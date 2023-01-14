import SideNavbar from '../../components/sidebar'
import CardRequester from '../../components/CardRequester'
import Head from 'next/head'

const dashboardRequester = () => {
  return (
    <div>
      <Head>
        <title>Dashboard Requester | All</title>
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
        <CardRequester />
        <CardRequester />
        <CardRequester />
        <CardRequester />
        <CardRequester />
        <CardRequester />
      </div>
    </div>
  )
}

export default dashboardRequester