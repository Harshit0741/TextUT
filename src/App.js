
import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.css';
import rootReducer from './reducers';
import App from './App';


function App() {
  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
