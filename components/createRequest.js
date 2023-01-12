import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function FormDialog() 
{
  const [open, setOpen] = useState(false);
  const [starttimehour, setstarttimehour] = useState();
  const [endtimehour, setendtimehour] = useState();
  const [starttimeminute, setstarttimeminute] = useState();
  const [endtimeminute, settimeminute] = useState()
  const [day , setday] = useState('')
  const [month , setmonth] = useState('')
  const [year , setyear] = useState('')
  const [approval, setapproval] = useState('')
  const [equipment, setequipment] = useState('')
  //const [roomname, setroomname] = useState('')
  //const [club, setclub] = useState('')
  const [eventbrief , seteventbrief] = useState('')

  const handleChange1 = (event) => {
    setstarttimehour(event.target.value);
  };
  const handleChange2 = (event) => {
    setendtimehour(event.target.value);
  };
  const handleChange3 = (event) => {
    setstarttimeminute(event.target.value);
  };
  const handleChange4 = (event) => {
    settimeminute(event.target.value);
  };
  const handleChange5 = (event) => {
    setday(event.target.value);
  };
  const handleChange6 = (event) => {
    setmonth(event.target.value);
  };
  const handleChange7 = (event) => {
    setyear(event.target.value);
  };
  const handleChange8 = (event) => {
    setapproval(event.target.value);
  };
  const handleChange9 = (event) => {
    setequipment(event.target.value);
  };
  const handleChange10 = (event) => {
    setroomname(event.target.value);
  };
  const handleChange11 = (event) => {
    setclub(event.target.value);
  };
  const handleChange12 = (event) => {
    seteventbrief(event.target.value);
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create New Request
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Request</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new request, please fill in the following details.
          </DialogContentText>
          <div className='flex flex-row md-2'>
            <div className='basis-1/2 mr-5 mb-5'>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Room Name"
                  type="text"
                />
            </div>
            <div className='basis-1/2'>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Club Associated"
                  type="text"
                />
              </div>
          </div>
          <div className='flex flex-row'>
            <div className='basis-1/2 mr-5 mb-5'>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Start Time Hour</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={starttimehour}
                  label="Start Time Hour"
                  onChange={handleChange1}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={22}>22</MenuItem>
                  <MenuItem value={23}>23</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='basis-1/2'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Start Time Minute</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={starttimeminute}
                label="Start Time Hour"
                onChange={handleChange3}
              >
                <MenuItem value={0}>00</MenuItem>
                <MenuItem value={5}>05</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={35}>35</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={45}>45</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={55}>55</MenuItem>
              </Select>
            </FormControl>
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='basis-1/2 mr-5 mb-5'>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">End Time Hour</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={endtimehour}
                  label="Start Time Hour"
                  onChange={handleChange2}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={22}>22</MenuItem>
                  <MenuItem value={23}>23</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='basis-1/2'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">End Time Minute</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={endtimeminute}
                label="End Time Minute"
                onChange={handleChange4}
              >
                <MenuItem value={0}>00</MenuItem>
                <MenuItem value={5}>05</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={35}>35</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={45}>45</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={55}>55</MenuItem>
              </Select>
            </FormControl>
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='basis-1/3 mr-5 mb-5'>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Day</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={day}
                  label="Start Time Hour"
                  onChange={handleChange5}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={22}>22</MenuItem>
                  <MenuItem value={23}>23</MenuItem>
                  <MenuItem value={24}>24</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={26}>26</MenuItem>
                  <MenuItem value={27}>27</MenuItem>
                  <MenuItem value={28}>28</MenuItem>
                  <MenuItem value={29}>29</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={31}>31</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className='basis-1/3 mr-5 mb-5'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={month}
                label="Month"
                onChange={handleChange6}
              >
                <MenuItem value={1}>January</MenuItem>
                <MenuItem value={2}>February</MenuItem>
                <MenuItem value={3}>March</MenuItem>
                <MenuItem value={4}>April</MenuItem>
                <MenuItem value={5}>May</MenuItem>
                <MenuItem value={6}>June</MenuItem>
                <MenuItem value={7}>July</MenuItem>
                <MenuItem value={8}>August</MenuItem>
                <MenuItem value={9}>September</MenuItem>
                <MenuItem value={10}>October</MenuItem>
                <MenuItem value={11}>November</MenuItem>
                <MenuItem value={12}>December</MenuItem>
              </Select>
            </FormControl>
            </div>

            <div className='basis-1/3'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={year}
                label="End Time Minute"
                onChange={handleChange7}
              >
                <MenuItem value={2024}>2024</MenuItem>
                <MenuItem value={2025}>2025</MenuItem>
              </Select>
            </FormControl>
            </div>
          </div>

          <div className='flex flex-row md-2'>
            <div className='basis-1/2 mr-5 mb-5'>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Equipments Required?"
                  type="text"
                />
            </div>
            <div className='basis-1/2'>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Event Brief"
                  type="text"
                />
              </div>
          </div>

          <div className='mb-5'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Ask For Approval By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={approval}
                label="Ask For Approval By"
                onChange={handleChange8}
              >
                <MenuItem value={'Yugal'}>Yugal</MenuItem>
                <MenuItem value={'Amit'}>Amit</MenuItem>
              </Select>
            </FormControl>
            </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='outlined' onClick={handleClose}>Create Request</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}