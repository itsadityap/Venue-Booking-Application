import SideNavbar2 from '../../components/sidebar2'
import CardReviewer from '../../components/CardReviewer'
import Head from 'next/head'

const dashBoardApprover = () => {
  return (
    <div>
      <Head>
        <title>Dashboard Approver | All</title>
        <meta
          name="description"
          content="Venue Booking Application Dashboard"
        />
      </Head>
      <div>
        <SideNavbar2 />
      </div>
      <div className='flex flex-row flex-wrap ml-64 mt-5 items-center'>
        <CardReviewer />
        <CardReviewer />
        <CardReviewer />
      </div>
    </div>
  )
}

export default dashBoardApprover