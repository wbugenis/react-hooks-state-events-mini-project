import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filterState, setFilterState] = useState("All")
  const [taskStateList, setTaskList] = useState(TASKS)

  const onTaskFormSubmit = (event) =>{
    event.preventDefault()
    const newTask = {
      text: event.target.text.value,
      category: event.target.category.value
    }
    setTaskList([...taskStateList, newTask])
  }

  const deleteHandler = (taskText) => {
    setTaskList(taskStateList.filter(task => task.text !== taskText))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setFilter={setFilterState} />
      <NewTaskForm categories={CATEGORIES} newTaskHandler={onTaskFormSubmit} />
      <TaskList tasks={taskStateList} filter={filterState} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
