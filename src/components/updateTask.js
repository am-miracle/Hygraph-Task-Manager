import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { CREATE_TASK } from '../lib/api';
import {OutlinedInput, FormControl, InputLabel, Button, Box} from '@mui/material'
import { Link } from 'react-router-dom';

const UpdateTask = () => {
  const [task, setTask] = useState({});
  const [createTask, { isadding }] = useMutation(CREATE_TASK)

  if (isadding) return 'Submitting...';

  const handleOnChange = (event)=> {
    setTask({ ...task, [event.target.name]: event.target.value});
  }
  const onClick = () => {
    createTask({variables: { ...task }});
  }

  return (
    <Box
    sx={{ maxWidth: '100%'}}>
      <FormControl fullWidth sx={{ my: 1 }}>
        <InputLabel>Title</InputLabel>
        <OutlinedInput
          onChange={handleOnChange}
          name='title'
          label="Title"
          sx={{bgColor: '#fff', color: '#fff'}}
        />
      </FormControl>
      <FormControl fullWidth sx={{ my: 1 }}>
        <OutlinedInput
          onChange={handleOnChange}
          name='description'
          label="Description"
          sx={{bgColor: '#fff', color: '#fff'}}
        />
      </FormControl>
      <FormControl fullWidth sx={{ my: 1 }}>
        <InputLabel>Assigned To</InputLabel>
        <OutlinedInput
          onChange={handleOnChange}
          name='assignedTo'
          label="Assigned To"
          sx={{bgColor: '#fff', color: '#fff'}}
        />
      </FormControl>
      <Link to='/'>
       <Button onClick={onClick} type='submit' sx={{ my: 1, py: 2 }} fullWidth variant="contained">Update</Button>
       </Link>
    </Box>
  )
}

export default UpdateTask