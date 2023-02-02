import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditRequest from './EditRequest';

const ITEM_HEIGHT = 48;

export default function LongMenu(props) 
{
    let cookie = ''
    const notifySuccessRequest = (param1) => toast.success(`${param1}`, {
      position: "top-right",
      autoClose: 6000,
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

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const deleteRequest = async () => 
    {
      let idBooking = { "booking_id" : `${props.booking_id}` }
      try
      {
        if(typeof document !== 'undefined')
        {
            cookie = document.cookie.split('=')[1]
        }
          await axios.post(`${process.env.NEXT_PUBLIC_BASEURLLOCAL}deleteRequest`,
          { "booking_id" : `${props.booking_id}` },
          {
            headers: {'Authorization': `Bearer ${cookie}`}
          }
          )
          .then((res)=>
          {
              notifySuccessRequest('Booking Deleted Successfully✅')
              handleClose()
              setTimeout(() => {
                window.location.href='/dashboardRequester/pending'
              }, 1300);
          })
          .catch((err)=>{
              if(err.response.status === 404)
              {
                notifyError('Booking not found❌')
              }
              else {
                notifyError('Something went wrong❌')
              }
          }
          )
      }   
      catch(err)
      {
        notifyError('Something went wrong❌')
      }
    }

    // const EditRequest = async () =>
    // {
    //   try
    //   {
    //     if(typeof document !== 'undefined')
    //     {
    //         cookie = document.cookie.split('=')[1]
    //     }
    //     console.log(cookie);
    //     let data = props.booking_id.booking_id;
    //     console.log(data);
    //       await axios.post(`${process.env.NEXT_PUBLIC_BASEURLLOCAL}editRequest`,{
    //         "booking_id": `${data}`
    //       })
    //       .then((res)=>
    //       {
    //           console.log(res);
    //           notifySuccessRequest('Booking Edited Successfully✅')
    //           handleClose()
    //       })
    //       .catch((err)=>{
    //           console.log(err);
    //       }
    //       )
    //   }   
    //   catch(err)
    //   {
    //     notifyError('Something went wrong❌')
    //     console.log(err);
    //   }
    // }
  
    return (
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
        <MoreVertIcon />
        </IconButton>
  
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
        <MenuItem onClick={EditRequest}>Edit</MenuItem>
        <MenuItem onClick={deleteRequest}>Delete</MenuItem>
        </Menu>
        <ToastContainer />
      </div>
    );
  }