import React, { useState } from "react";
import "./Todolist.css";
import PomodoroTimer from "./Timer";

const Todolist = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setTasks((prevTasks) => [...prevTasks, input]);
            setInput("");
        }
    };

    const handleRemove = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    const currentTask = tasks[0] || "No Task";

    return (
        <div className="todolist">
            {<PomodoroTimer currentTask={currentTask} />}
            <h2>To-Do List</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Add a new task"
                />
                <button type="submit">Add</button>
            </form>
            <div className="task-container">
                {tasks.map((item, index) => (
                    <div className="task-box" key={index}>
                        <span>{item}</span>
                        <button onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Todolist;
