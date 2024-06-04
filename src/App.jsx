import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [tasks, setTask] = useState(["Finish MAD Viva", "Create PWD Content"]);
  const [newTask, setNewTask] = useState("");

  function addTask(){
    if (!tasks.includes(newTask)){
      setTask([...tasks, newTask]);
    }
  }

  function deleteTask(index){
    setTask(tasks.filter((task, listItemIndex) => listItemIndex != index));
  }

  function moveUpTask(index){

    if (index != 0){
      console.log("IM IN")
      const tempTasks = [...tasks];
      [tempTasks[index], tempTasks[index-1]] = [tempTasks[index-1], tempTasks[index]];
      setTask([...tempTasks]);
    }
  
  }

  function moveDownTask(index){
    if (index != tasks.length -  1){
    const tempTasks = [...tasks];
    [tempTasks[index], tempTasks[index+1]] = [tempTasks[index+1], tempTasks[index]];
    setTask([...tempTasks]);
    }
    
    
  }

  function handleInputChange(event){
    setNewTask(event.target.value);
  }


  return (
    <>
    {/* Heading */}
    <h1>To-Do Hub</h1>

    {/* Entering the task */}
    <div id='enterTask'>
      <input type="text" name="" id="textInput" placeholder='Enter your task here...' value={newTask} onChange={handleInputChange}/>
      <button onClick={addTask} id='addBtn'>Add</button>
    </div>

    {/* Tasks */}
    <ol>
      {tasks.map((task, index) => { 
        return <li key={index}>

          {/* Task */}
          <span id='task'>{task}</span>

          {/* Up Button */}
          <button onClick={() => moveUpTask(index)} id='moveUp'>Up</button>

          {/* Down Button */}
          <button onClick={() => moveDownTask(index)} id='moveDown'>Down</button>

          {/* Delete Button */}
          <button onClick={() => deleteTask(index)} id='deleteBtn'>Delete</button>

      
          
          </li>
        
      }
      )}
    </ol>
    </>
  )
}

export default App
