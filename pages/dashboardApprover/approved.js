import Head from 'next/head'
import SideNavbar2 from '../../components/sidebar2'
import CardRequester from '../../components/CardRequester'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Approved = () => {

  let cookie = ''
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      if(typeof document !== 'undefined')
      {
        cookie = document.cookie.split('=')[1]
      }
      console.log('cookie', cookie);
      try
      {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURLLOCAL}getAppRequestsReviewers`,{
          headers: {
            'Authorization': `Bearer ${cookie}`
          }
        })
        setData(response.data)
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
        <title>Dashboard Admin | Approved</title>
        <meta
          name="description"
          content="Venue Booking Application Dashboard"
        />
      </Head>
      <div>
        <SideNavbar2 />
      </div>
      <div className='flex flex-row flex-wrap lg:ml-64 mt-5 items-center rounded-full'>
        {
          data.map((item) => {
            return (
              <CardRequester key={item.booking_id}
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

export default Approved