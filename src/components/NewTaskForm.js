import React, {useState} from "react";

function NewTaskForm({categories, newTaskHandler}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  const options = categories.map(category => <option key={category} value={category}>{category}</option>)
  
  const submitHandler = (event) => {
    newTaskHandler(event)
    setText("")
    setCategory("Code")
  }

  return (
    <form className="new-task-form" onSubmit={submitHandler}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={event=> setText(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={event => setCategory(event.target.value)}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
