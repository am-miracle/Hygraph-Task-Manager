import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { UPDATE_TASk } from '../lib/api';
import {OutlinedInput, FormControl, InputLabel, Button, Box} from '@mui/material'
import { Link } from 'react-router-dom';

const UpdateTask = () => {
    const [taskToUpdate, setTaskToUpdate] = useState('');
    const [replacementTask, setReplacementTask] = useState({
      title: '', description: '', assignedTo: ''
    });
    const [updateTask] = useMutation(UPDATE_TASk);


  const handleUpdate = () => {
    updateTask({ variables: { taskToUpdate, replacementTask }});
  }
  console.log(taskToUpdate.id)

  return (
    <Box
    sx={{ maxWidth: '100%'}}>
      <FormControl fullWidth sx={{ my: 1 }}>
        <InputLabel>Title</InputLabel>
        <OutlinedInput
          onChange={e => setReplacementTask({ ...replacementTask, title: e.currentTarget.value })}
          name='title'
          label="Title"
          sx={{bgColor: '#fff', color: '#fff'}}
        />
      </FormControl>
      <FormControl fullWidth sx={{ my: 1 }}>
      <InputLabel>Description</InputLabel>
        <OutlinedInput
          onChange={e => setReplacementTask({ ...replacementTask, description: e.currentTarget.value })}
          name='description'
          label="Description"
          sx={{bgColor: '#fff', color: '#fff'}}
        />
      </FormControl>
      <FormControl fullWidth sx={{ my: 1 }}>
        <InputLabel>Assigned To</InputLabel>
        <OutlinedInput
          onChange={e => setReplacementTask({ ...replacementTask, assignedTo: e.currentTarget.value })}
          name='assignedTo'
          label="Assigned To"
          sx={{bgColor: '#fff', color: '#fff'}}
        />
      </FormControl>
      <Link to='/'>
       <Button onClick={handleUpdate} type='submit' sx={{ my: 1, py: 2 }} fullWidth variant="contained">Update</Button>
       </Link>
    </Box>
  )
}

export default UpdateTask