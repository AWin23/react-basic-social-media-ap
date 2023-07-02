import "./App.css";
import { Task } from "./Task";
import React, { useState } from "react";

function App() {

  //  hooks for the todo list and the tasks 
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  //  function to add task to the list. 
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  //  setting a list after looping thru the array of todoList and filtering all the ids that arent equal to task ID
  //  then create a new list of what you are filtering FROM
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      if (task.id === id) {
        return false;
      } else {
        return true;
      }
    })

    //  then set the TodoList to the new TodoList that was MADE after filtering 
    setTodoList(newTodoList);
  };

  //  loop thru appray passing in id as arrow parameter for the task ID that needs to be completed 
  //  while setting a new list, we loop thru the todoList array with the task as index. Run thru and check if the task.id IS SAME AS ID
  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) => {

        //  if they are equal we return a new task OBJECT that is completed, its set to completed to mark as done 
        if (task.id === id) {
          return { ...task, completed: true };
        } else {

          // ... else we jsut return the current TASK. 
          return task;
        }
      })
    )
  };


  //  return render function 
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className="list">
        <button onClick={completedTask}> Complete </button>
        {todoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completed={task.completed} completedTask={completedTask} />
        })}
      </div>
    </div>
  );
}

export default App;