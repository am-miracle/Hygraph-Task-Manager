import React from 'react';
import Overview from './components/Overview';
import { TaskProvider } from './contexts/TaskContext';


function App() {
  return (
    <TaskProvider>
      <Overview />
    </TaskProvider>
  );
}

export default App;
