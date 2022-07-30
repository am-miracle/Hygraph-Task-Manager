import * as React from 'react';
    
// mui components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

// custom components
import BottomNav from './BottomNav';
import TaskListItem from './TaskListItem';

// data
// import { useTaskContext } from '../contexts/TaskContext';

// icons
import { AssignmentInd, Description, Title } from '@mui/icons-material';

// Queries
import { ALL_TASK } from '../lib/api';
import { useQuery } from '@apollo/client';

export default function TaskList() {
    const { data, loading, error } = useQuery(ALL_TASK);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    // console.log(data.tasks.map(({title, description, assignedTo}) => console.log(title, description, assignedTo)));
    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <h1>Tasks</h1>
            <List>
                {
                    data.tasks && data.tasks.map(
                        ({id, title, __typename, description, assignedTo}, i)=>(
                        <TaskListItem
                            key={i}
                            id={id}
                            TaskType={__typename}
                            TaskFieldData={[
                                {icon: <Title/>, attrib: title},
                                {icon: <Description/>, attrib: description},
                                {icon: <AssignmentInd/>, attrib: assignedTo},
                            ]}
                        />
                    ))
                }
            </List>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNav/>
            </Paper>
        </Box>
    );
};