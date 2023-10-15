// import React, { useState } from 'react'
// import Text from './text'
// import Bootstrap from './bootstrap'
// function App() {
//   const [showText, setShowText] = useState(false)
//   return (
//     <div>
//       <button onClick={() => { setShowText(!showText) }}>Show Text</button>

//       {showText && <Text />}
//       <Bootstrap />
//     </div>
//   )

// }

// export default App
import React, { useState } from "react"
import { Task } from "./Task"
import "./app.css"
function App() {

  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {

    // it break 
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed : false
    }

    setTodoList([...todoList, task])
  }

  // specific task deletes
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  const completedTask  =(id)=>{
    setTodoList(todoList.map((task)=>{
      if(task.id === id){
        return  {...task , completed : true} 
      }else{
        return task 
      }
    }))
  }

  return (
    <>
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add tasks</button>
      </div>

      <div className="list">
        {todoList.map((task) => {
          return (
            <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completedTask={completedTask}
            completed={task.completed}/>
          )
        })}
      </div>
      </div>

    </>
  )
}
export default App 
