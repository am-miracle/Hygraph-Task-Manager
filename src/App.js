import React from 'react';

import { Route, Routes } from "react-router-dom";

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import BottomNav from './components/BottomNav';

import './App.css'

function App() {
  return (
      <div className='container'>
        <div className='app-wrapper'>
          <div className='header'>
            <h1>Task Manager</h1>
          </div>
          <div className='main'>
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/new" element={<AddTask /> } />
            </Routes>
          </div>
          <BottomNav />
        </div>
      </div>
  );
}

export default App;
