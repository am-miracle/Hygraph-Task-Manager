import React from 'react';

import { Route, Routes } from "react-router-dom";

import AddForm from './components/AddForm';
import TaskList from './components/TaskList';
import BottomNav from './components/BottomNav';
import UpdateTask from './components/updateTask';

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
              <Route path="/new" element={<AddForm /> } />
              <Route path='/edit' element={<UpdateTask />} />
            </Routes>
          </div>
          <BottomNav />
        </div>
      </div>
  );
}

export default App;
