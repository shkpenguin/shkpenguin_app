// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Todolist from './Todolist';
import './App.css';
import PomodoroTimer from "./Timer"; // Import PomodoroTimer

const Home = () => {
  const [currentTask, setCurrentTask] = useState(null);

  const handleTaskChange = (task) => {
    setCurrentTask(task);
  };

  return (
    <div className="title">
      <Todolist onTaskChange={handleTaskChange} />
      {currentTask && <PomodoroTimer currentTask={currentTask} />}
    </div>
  );
};

const About = () => (
  <div className="title">
    <h1>About Page</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
