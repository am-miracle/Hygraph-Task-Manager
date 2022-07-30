import React from 'react';
    
// custom component
import TaskList from './TaskList';
// import CreateTaskEntry from './CreateTaskEntry';
// import EditTaskEntry from './EditTaskEntry';

// contexts
import { useTaskContext } from '../contexts/TaskContext';
const Overview = () => {
    const { nav_value } = useTaskContext();
    
    switch (nav_value) {
        case "TaskList":
            return <TaskList/>
        // case "AddTask":
        //     return <CreateTaskEntry/>
        // case "EditTask":
        //     return <EditTaskEntry/>
        default:
            return <TaskList/>
    };
};
export default Overview;