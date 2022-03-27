import React from 'react';
import {useState} from 'react/cjs/react.development';
import Todo from './Todo';
import TodoForm from './Todoform'
export default function Todolist() {
  // State Array which hold all
   const [todos,setTodos]=useState([]);
   // Add To do
   const addTask = task=>{
       if(!task.text){
           return
       }
       const newTodos=[task, ...todos];
       
       setTodos(newTodos);
}
  //  Remove Todo
  const removeTask= id=>{
    let updatedTasks=[todos].filter(task=>task.id!==id)
    setTodos(updatedTasks)
  }
  // Task is completed
  const completeTask=id =>{
    let updatedTasks= todos.map(todo=>
      {
        if(todo.id===id){
          todo.iscomplete=true;
        }
        return todo;
      })
      setTodos(updatedTasks)
  }
  return <div>
      <TodoForm addTask={addTask}></TodoForm>
      <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
  </div>;
  
}
