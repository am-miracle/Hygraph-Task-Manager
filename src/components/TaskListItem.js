import React, { useState } from 'react';
    
// mui components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

// mui icons
import { IconButton, ListItem } from '@mui/material';
import {
    Edit,
    ExpandMore,
    ExpandLess,
    LabelImportantOutlined,
    DeleteOutline,
} from '@mui/icons-material';

// nav
import { useTaskContext } from '../contexts/TaskContext';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_TASK, Task } from '../lib/api';

export default function TaskListItem({ TaskType, id, TaskFieldData}) {
    const [open, setOpen] = useState(true);
    const { changeNavValue, getTaskId } = useTaskContext();

    // const { data, loading, error } = useQuery(Task, {
    //     variables: {id: id}
    // });
    const [deleteTask] = useMutation(DELETE_TASK)

    // const handleRemoveItem = id => {
    //     deleteTask({
    //         variables: { id },
    //         update(cache) {
    //             cache.modify({
    //                 fields: {
    //                     tasks(existingTaskRefs, { readField }) {
    //                         return existingTaskRefs.filter(
    //                             taskRef => id !== readField('id', taskRef)
    //                         )
    //                     }
    //                 }
    //             })
    //         }
    //     })
    // }

    const handleClick = () => {
        setOpen(!open);
    };
    const handleEditButton = () => {
        getTaskId(id);
        changeNavValue("EditTask");
    };
    return (
        <List
            sx={{ width: '100%', bgColor: 'background.paper' }}
        >
        <ListItem
            secondaryAction={
                <>
                    <IconButton onClick={handleEditButton} edge="end" aria-label="edit">
                        <Edit sx={{ color: 'green' }}/>
                    </IconButton>
                    <IconButton onClick={()=> deleteTask({variables: {id: id}})} edge="end" aria-label="delete" sx={{ padding: 2}}>
                        <DeleteOutline color="secondary"/>
                    </IconButton>
                </>
            }
        >
            <ListItemButton disableRipple onClick={handleClick}>
                    <ListItemIcon>
                        <LabelImportantOutlined />
                    </ListItemIcon>
                    <ListItemText
                        primary={TaskType}
                        secondary="Title, Description, assignedTo"
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
        </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        TaskFieldData.map((item, i)=>(
                            <ListItemButton key={i} disableRipple sx={{ pl: 9 }}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.attrib} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
        </List>
    );
};