import SideNavbar2 from '../../components/sidebar2'
import CardReviewer from '../../components/CardReviewer'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../../components/Loader'

const dashBoardApprover = () => {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)
  let cookie = ''

  useEffect(() => {
    const fetcher = async () => {
      if(typeof document !== 'undefined')
      {
        cookie = document.cookie.split('=')[1]
      }
      console.log('cookie', cookie);
      try
      {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURLLOCAL}getAllRequestsReviewers`,{
          headers: {
            'Authorization': `Bearer ${cookie}`
          }
        })
        setData(response.data)
        setLoading(false)
      }
      catch(err)
      {
        console.log('err', err)
      }
    }
    fetcher()
  },[])

  return (
    <div>
      <Head>
        <title>Dashboard Admin | All</title>
        <meta
          name="description"
          content="Venue Booking Application Dashboard"
        />
      </Head>
      <div>
        <SideNavbar2 />
      </div>
      
      <div className='flex flex-row flex-wrap ml-64 mt-5 items-center'>
        {
          isLoading ? <Loader /> :
          data.map((item) => {
            return (
              <CardReviewer  
                key={item.booking_id}
                booking_id={item.booking_id}
                room={item.room}
                date={item.date}
                time_start_hours={item.time_start_hours}
                time_start_minutes={item.time_start_minutes}
                time_end_hours={item.time_end_hours}
                time_end_minutes={item.time_end_minutes}
                bookingStatus={item.bookingStatus}
                eventBrief={item.eventBrief}
                equipmentRequired={item.equipmentRequired}
                />
            )
          })
        }
      </div>
    </div>
  )
}

export default dashBoardApprover