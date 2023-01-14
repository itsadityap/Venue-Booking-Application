import Head from 'next/head'
import SideNavbar2 from '../../components/sidebar2'
import CardApprover from '../../components/CardReviewer'

const Pending = () => {
  return (
    <div>
      <Head>
        <title>Dashboard Approver | Pending</title>
        <meta
          name="description"
          content="Venue Booking Application Dashboard"
        />
      </Head>
      <div>
        <SideNavbar2 />
      </div>
      <div className='flex flex-row flex-wrap ml-64 mt-5 items-center rounded-full'>
        <CardApprover />
      </div>
    </div>
  )
}

export default Pending