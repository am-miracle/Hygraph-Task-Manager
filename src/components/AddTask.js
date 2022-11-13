import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { CREATE_TASK } from '../lib/api';
import {OutlinedInput, FormControl, InputLabel, Button, Box} from '@mui/material'
import { Link } from 'react-router-dom';

const AddTask = () => {
  const [task, setTask] = useState({});
  const [createTask, { isadding }] = useMutation(CREATE_TASK, {
    refetchQueries: [{ query: CREATE_TASK}]
  })

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
        <InputLabel sx={{color: '#cccc'}}>Title</InputLabel>
        <OutlinedInput
          onChange={handleOnChange}
          name='title'
          label="title"
          sx={{border: '1px solid #cccc'}}
        />
      </FormControl>
      <FormControl fullWidth sx={{ my: 1 }}>
        <InputLabel sx={{color: '#cccc'}}>Description</InputLabel>
         <OutlinedInput
          onChange={handleOnChange}
          name='description'
          label="description"
          sx={{border: '1px solid #cccc'}}
        />
      </FormControl>
      <FormControl fullWidth sx={{ my: 1 }}>
        <InputLabel sx={{color: '#cccc'}}>Assigned To</InputLabel>
        <OutlinedInput
          onChange={handleOnChange}
          name='assignedTo'
          label="Assigned To"
          sx={{border: '1px solid #cccc'}}
        />
      </FormControl>
      <Link to='/'>
       <Button onClick={onClick} type='submit' sx={{ my: 1, py: 2 }} fullWidth variant="contained">Submit</Button>
      </Link>
    </Box>
  )
}

export default AddTask