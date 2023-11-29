import React from 'react';
import { useState } from 'react';

function TaskList(props) {
    
    const [completedTasks,setCompletedTasks] = useState([]);
    
    const handleTaskCompletion = (task) => {
        const updatedTask = { ...task, completion: !task.completion };
        props.setTaskList((prevTaskList) => {
          const updatedTaskList = prevTaskList.map((element) =>
            element === task ? updatedTask : element
          );
          return updatedTaskList;
        });
        props.saveToLocalStorage([...props.taskList]);
        
      };

      const handleDeleteClick = (task)=>{
          const updated_list = props.taskList.filter((element)=>task !== element);
          props.setTaskList(updated_list);
          props.saveToLocalStorage(updated_list);
      }

    
  return (
    <div className='container d-flex justify-content-center flex-wrap '>
      
     
 
      {props.taskList.map((task,index)=>(
         <div className="test">
            <div className={`card my-4 mx-4 text-white bg-${props.mode === 'light' ? 'secondary' :'dark'}`} style={{width: "18rem"}} >
        <div className="card-body" key = {index}>
        <h5 className={`card-title ${task.completion ? 'strike-through':""} `}>{task.task_name}</h5>
        
        <p className={`card-text ${task.completion ? 'strike-through':""}`}>{task.task_desc}</p>
        <h6 className={`card-title ${task.completion ? 'strike-through':""} `}>priority : {task.prioriy_value}</h6>
        <div className="form-check my-1">
         </div>
         <span onClick={()=> handleTaskCompletion(task)}> <input className="form-check-input mx-1 task-completed" type="checkbox" value="" id="flexCheckDefault" checked = {task.completion} onClick={()=> handleTaskCompletion(task)}/><p className='task-completed'>Task Completed</p></span>
       
    </div>
    <div className="delete mx-4 my-1 task-completed" onClick={()=>handleDeleteClick(task)} >
    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash3-fill" viewBox="0 0 16 16">
      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
    </svg> Delete Task</span>
    </div>
    
         
    
      
      
    
    
      </div>
      </div>
     ))} 

    </div>
  )
}

export default TaskList
