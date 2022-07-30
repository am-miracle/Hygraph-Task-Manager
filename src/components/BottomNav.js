import * as React from 'react';
    
// core components
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// icons
import {
    AddTask,
    Task,
} from '@mui/icons-material';

// contexts
import { useTaskContext } from '../contexts/TaskContext';

export default function BottomNav() {
    const { nav_value, changeNavValue } = useTaskContext();
    const handleChange = (event, newValue) => {
        changeNavValue(newValue);
    };
    return (
        <BottomNavigation showLabels value={nav_value} onChange={handleChange}>
            <BottomNavigationAction
                label="Tasks"
                value="TaskList"
                icon={<Task />}
            />
            <BottomNavigationAction
                label="Add Task"
                value="AddTask"
                icon={<AddTask />}
            />
        </BottomNavigation>
    );
};