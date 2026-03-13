import React, { useState } from 'react'

const React_list = () => {

  const [tasks,setTasks]=useState([])
  const [newTask,setNewTask]=useState('');

  const HandleTaskChange=(e)=>{
    setNewTask(e.target.value)
  }

  const addTask=()=>{
    if(newTask.trim() !==''){
      setTasks(t=>[...t,newTask]);
      setNewTask('');
    }
  }

  const deleteTask=(index)=>{
  const updatedTask=tasks.filter((_,i)=>i!==index);
      setTasks(updatedTask);
  }

  const moveTaskUp=(index)=>{
   if(index>0){
     const updatedTask=[...tasks];
    [updatedTask[index],updatedTask[index-1]]=
    [updatedTask[index-1],updatedTask[index]]

    setTasks(updatedTask)
   }
  }
  const moveTaskDown=(index)=>{
    if(index<tasks.length-1){
       const updatedTask=[...tasks];
    [updatedTask[index +1],updatedTask[index]]=
    [updatedTask[index],updatedTask[index + 1]]

    setTasks(updatedTask)
    }
  }
  return (
    <>
    <div className="react-list">
      <h1>To Do List</h1>
      <input type="text" placeholder='Enter Task.....' onChange={HandleTaskChange} value={newTask}/>
      <button className='add-btn' onClick={()=>addTask()}>Add Task</button>

      <div className="list">
        <ol>
          {tasks.map((task,index)=><li key={index}><span className='text'>{task}</span>
            <button className='delete-btn' onClick={()=>deleteTask(index)}>delete</button>
            <button className='move-up' onClick={()=>moveTaskUp(index)}>up</button>
            <button className='move-down' onClick={()=>moveTaskDown(index)}>down</button>
          </li>)}
        </ol>
      </div>
    </div>
    </>
  )
}

export default React_list