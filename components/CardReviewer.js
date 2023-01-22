import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardReviewer = (props) => {

  let cookie = ''
  const notifySuccessRequest = (param1) => toast.success(`${param1}`, {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notifyError = (param1) => toast.error(`${param1}`, {
    position: "top-right",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const denyBooking = async () => {
    try
    {
      if(typeof document !== 'undefined')
      {
        cookie = document.cookie.split('=')[1]
      }
      console.log('cookie', cookie);
      await axios.post(`${process.env.NEXT_PUBLIC_BASEURLLOCAL}deny`,{
        "booking_id": `${props.booking_id}`
      },
      {
        headers: {'Authorization': `Bearer ${cookie}`}
      }
      ).then((res) => {
        console.log('res', res)

        if(res.status === 200)
        {
          notifySuccessRequest('Booking Denied Successfully✅')
          setTimeout(() => {
            window.location.href='/dashboardApprover/pending'
          }, 1800);
        }
        else if(res.status === 409)
        {
          notifyError('Error as the booking was already approved or denied.❌')
        }
        else
          notifyError('Booking Denied Failed❌')

      }).catch((err) => {
        notifyError('Booking Denied Failed❌')
      })
    }
    catch(err){
      if(err.response.status === 409)
        {
          notifyError('Error as it was already approved or denied.❌')
        }
      console.log('err', err)
    }
  }

  const approveBooking = async () => {

    let idBooking = 
    { "booking_id" : `${props.booking_id}` }
    
    try
    {

      if(typeof document !== 'undefined')
      {
        cookie = document.cookie.split('=')[1]
      }
      console.log('cookie', cookie);

      await axios.post(`${process.env.NEXT_PUBLIC_BASEURLLOCAL}approve`,idBooking,{
        headers : {'Authorization': `Bearer ${cookie}`}
      }
      ).then((res) => {
        console.log('res', res)

        if(res.status === 200)
        {
          notifySuccessRequest('Booking Approved Successfully✅')
          setTimeout(() => {
            window.location.href='/dashboardApprover/pending'
          }, 1800);
        }

        else if(res.status === 409)
        {
          notifyError('Error as it was already approved or denied.❌')
        }
        else
          notifyError('Booking Approval Failed❌')

      }).catch((err) => {
        console.log('err', err)
        notifyError('Booking Approval Failed❌')
      })
    }
    catch(err){
      if(err.response.status === 409)
        {
          notifyError('Error as it was already approved or denied.❌')
        }
      console.log('err', err);
      notifyError('Booking Approved Failed❌')
    }
  }

  return (
    <div className='m-2.5'>
    <Card sx={{ maxWidth: 600, bgcolor:'#CBD5E1'}}>
    <CardActionArea>
      <CardContent>
        <div className='flex justify-center'>
          <Typography gutterBottom variant="h5" component="div">
            {props.eventBrief}
          </Typography>
        </div>
        <div className='flex flex-row space-x-16 mb-5'>
          <div className='basis-1/2'>
            <Typography variant="body2" color="text.secondary">
              {props.booking_id}
            </Typography>
          </div>
          <div className='basis-1/2 text-right'>
            <Typography variant="body2" color="text.secondary">
              {props.room}
            </Typography>
          </div>
        </div>
        <div className='flex flex-row space-x-24'>
          <div className='basis-1/3'>
            <Typography variant="body2" color="text.secondary">
              {props.date}
            </Typography>
          </div>
          <div className='basis-1/3'>
            <Typography variant="body2" color="text.secondary">
            {`${props.time_start_hours} : ${props.time_start_minutes}`}
            </Typography>
          </div>
          <div className='basis-1/3'>
            <Typography variant="body2" color="text.secondary">
            {`${props.time_end_hours} : ${props.time_end_minutes}`}
            </Typography>
          </div>
        </div>
        <div className='text-center m-2'>
          <Typography variant='body2' color='text.secondary'>
            {props.equipmentRequired}
          </Typography>
        </div>
        <div className='text-center m-2'>
            <Typography variant='body2' color='text.secondary'>
              {props.bookingStatus}
            </Typography>
        </div>
      </CardContent>
    </CardActionArea>

    <div className='flex flex-row space-x-44'>
      <CardActions>
        <button type="button" class="inline-block px-6 py-2.5 bg-red-600 
          text-white font-medium text-xs leading-tight uppercase 
            rounded shadow-md hover:bg-red-700 hover:shadow-lg 
          focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg 
            transition duration-150 ease-in-out" onClick={denyBooking}>Deny</button>
      </CardActions>
      <CardActions>
        <button type="button" class="inline-block px-6 py-2.5 bg-green-500 
          text-white font-medium text-xs leading-tight uppercase 
          rounded shadow-md hover:bg-green-600 hover:shadow-lg 
          focus:bg-green-600 focus:shadow-lg focus:outline-none 
          focus:ring-0 active:bg-green-700 active:shadow-lg 
          transition duration-150 ease-in-out" onClick={approveBooking}>Approve</button>
      </CardActions>
    </div>
  </Card>
    <ToastContainer />
  </div>
  )
}

export default CardReviewer