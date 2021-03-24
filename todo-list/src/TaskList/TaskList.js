//franzi is working here(-:)

import React, {useState} from "react";
import NewTaskInput from "../NewTaskInput";
import Task from "../Task";
import "./TaskList.css";


function TaskList() {

    const [tasks, setTasks] = useState([]);                       //inital state 
    
    const addTask = task => {

    const newTasks=[task, ...tasks]

    setTasks(newTasks)
    };
    // part 1 done

    // remove task part 

    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id)   //...tasks -> filters the array of tasks

        setTasks(removeArr);
    };
    
    // Done part 2 

    const compTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id){
                task.isComplete = !task.isComplete
            }
            return task;
        });
        setTasks(updatedTasks);
    };


    return (
        //<> this is called fragment. It´s like an empty div
        
        <div className="TaskList">
            <h2>
                Todo List </h2>
            <NewTaskInput onSubmit={addTask} />
            <Task 
            tasks={tasks}
            compTask={compTask}
            removeTask={removeTask} />
        </div>
    ); 
}


export default TaskList;

 

// i dont know what im doing ! Dimitris is here. Me tooo (olli)