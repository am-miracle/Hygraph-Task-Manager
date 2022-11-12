import { useMutation } from '@apollo/client'
import React  from 'react'
import { DELETE_TASK, UPDATE_TASk } from '../lib/api'
import {AssignmentInd, Delete, Description, Update} from '@mui/icons-material';
import { List, ListItemButton, ListItemIcon, ListItemText, Typography, Stack, Button } from '@mui/material';

const Task = ({ task, getTask }) => {

    const [deleteTask] = useMutation(DELETE_TASK, {
        refetchQueries: [
            { query: getTask },
        ]
    })
    // const [updateTask] = useMutation(UPDATE_TASk, {
    //     refetchQueries: [
    //         { query: getTask },
    //     ]
    // });

    const handleDelete = ()=> {
        deleteTask({ variables: { id: task.id }});
    }
    // const handleUpdate = () => {
    //     updateTask({ variables: { id: task.id }})
    // }


  return (
    <li className='list-item'>
        <List sx={{ width: '100%'}} component="nav" aria-labelledby="nested-list-subheader"
        >
            <Typography sx={{color: '#ccc'}} variant="h5" gutterBottom>
                {task.title}
            </Typography>
        <ListItemButton>
            <ListItemIcon>
            <Description  />
            </ListItemIcon>
            <ListItemText primary={task.description} />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
            <AssignmentInd />
            </ListItemIcon>
            <ListItemText primary={task.assignedTo} />
        </ListItemButton>
        </List>
        <Stack direction="row" spacing={1}>
            <Button className='btn-delete task-btn'>
                <Delete
                sx={{bgcolor: '#292f38', color: '#ccc'}}
                onClick={handleDelete}
                />
            </Button>
            <Button href='/edit' className='btn-delete task-btn'>
                <Update
                sx={{bgcolor: '#292f38', color: '#ccc'}}
                // onClick={handleUpdate}
                />
            </Button>
        </Stack>
    </li>
  )
}

export default Task