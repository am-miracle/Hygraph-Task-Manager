import React, { createContext, useContext, useState } from 'react';
const TaskContext = createContext();

export const useTaskContext = () => {
    return useContext(TaskContext);
};

export const TaskProvider = ({children}) => {
    const [nav_value, set_nav_value] = useState("TaskList");
    const [taskId, setTaskId] = useState("");

    // change navigation value
    const changeNavValue = (value) => {
        set_nav_value(value);
    };
    const getTaskId = (id) => {
        setTaskId(id);
    };

    const value = {
        changeNavValue,
        nav_value,
        getTaskId,
        taskId
    };

    // context provider
    return(
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
};