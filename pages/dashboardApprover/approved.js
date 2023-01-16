import Head from 'next/head'
import SideNavbar2 from '../../components/sidebar2'
import CardRequester from '../../components/CardRequester'

const approved = () => {
  return (
    <div>
    <Head>
        <title>Dashboard Approver | Approved</title>
        <meta
          name="description"
          content="Venue Booking Application Dashboard"
        />
      </Head>
      <div>
        <SideNavbar2 />
      </div>
      <div className='flex flex-row flex-wrap ml-64 mt-5 items-center rounded-full'>
        <CardRequester />
        <CardRequester />
      </div>
    </div>
  )
}

export default approved