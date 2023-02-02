import SideNavbar from '../../components/sidebar'
import CardRequester from '../../components/CardRequester'
import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react'

const DashboardRequester = () => {

  let cookie = ''
  const [data, setData] = useState([]);

  useEffect(() => {
  const fetcher = async () => {
      if(typeof document !== 'undefined')
      {
        cookie = document.cookie.split('=')[1]
      }
      try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURLLOCAL}getAllRequestsRequester`,{
          headers: {
            'Authorization': `Bearer ${cookie}`
          }
        })
        setData(response.data)
      }
      catch(err)
      {
        console.log('error',err)
      }
    }
    fetcher()
  },[])

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
      <div className='flex flex-row flex-wrap ml-60 mt-5 items-center rounded-full'>
        {data.map((item) => {
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
          )})}
      </div>
    </div>
  )
}

export default DashboardRequester