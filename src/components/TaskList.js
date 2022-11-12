import { useQuery } from '@apollo/client';
import React from 'react'
import { ALL_TASK } from '../lib/api';
import Task from './Task';
import { Typography } from '@mui/material';



const TaskList = () => {
  const { loading, error, data } = useQuery(ALL_TASK)


  if (loading) return <p>Getting tasks...</p>;
  if (error) return <p>An error occurred</p>;


  return (
    <div>
        <Typography sx={{color: '#ccc'}} variant="p" gutterBottom>
            Total Tasks: {data.tasks.length}
        </Typography>
        {data.tasks.length ?
            (
                <ul className='list'>
                    {data.tasks.map((task) => (
                        <Task task={task} key={task.id} />
                    ))}
                </ul>
            )
            :
            (
                <div className='no-tasks'>No Tasks</div>
            )
        }
    </div>
  )
}

export default TaskList;

// import { useMutation } from '@apollo/client'
// import React from 'react'
// import { DELETE_TASK, UPDATE_TASk } from '../lib/api';


// const TaskList = ({ tasks, getTask }) => {
//     const [deleteTask] = useMutation(DELETE_TASK, {
//         refetchQueries: [
//             { query: getTask },
//         ]
//     })
//     const [updateTask] = useMutation(UPDATE_TASk, {
//         refetchQueries: [
//             { query: getTask },
//         ]
//     });
//   return (
//     <div>
//         {tasks && tasks.tasks.map(({id, title, description, assignedTo}) => (
//             <div key={id}>
//                 <li>
//                     <h1>{title}</h1>
//                     <h3>{description}</h3>
//                     <p>{assignedTo}</p>
//                 </li>
//                 <button onClick={() => {updateTask({variables: { id: id}})}}>edit</button>
//                 <button onClick={() => {deleteTask({ variables: { id: id }})}}>delete</button>
//             </div>
//         ))}
//     </div>
//   )
// }

// export default TaskList