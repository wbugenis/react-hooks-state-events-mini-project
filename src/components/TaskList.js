import React from "react";
import Task from "./Task"

function TaskList({tasks, filter, deleteHandler}) {

  const filteredTasks = () =>{
    if (filter === "All") {
      return tasks  
    } else {
      return tasks.filter(task => task.category === filter)
    }
  }

  const taskArr = filteredTasks().map(task => <Task key={task.text} category={task.category} text={task.text} deleteHandler={deleteHandler}/>)

  return (
    <div className="tasks"> 
      {taskArr}
    </div>
  );
}

export default TaskList;
