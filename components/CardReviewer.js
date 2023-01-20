import { Card, CardActionArea, CardActions, CardContent, Button, Typography } from '@mui/material'

const CardReviewer = (props) => {
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
        <Button className='bg-red-500	hover:bg-red-600' variant="contained" >Deny</Button>
      </CardActions>
      <CardActions>
        <Button className='bg-green-600	hover:bg-green-800' variant="contained" >Approve</Button>
      </CardActions>
    </div>
      
  </Card>
  </div>
  )
}

export default CardReviewer