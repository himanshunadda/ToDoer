import React from 'react';


function AddTask(props) {

   
    
    const handleTaskNameClick = (event)=>{
            console.log(event.target.value);
            props.setTaskName(event.target.value);
    }

    const handleDescClick = (event) =>{
        console.log(event.target.value);
        props.setTaskDesc(event.target.value);
    }

    const handleAddTaskClick = ()=>{
        if(props.taskName == ''){
            alert("task name can not be empty please enter task name to procede.") }else{
      let task_details = {
            task_name : props.taskName,
            task_desc : props.taskDesc,
            prioriy_value : props.priority,
            completion : false
            
        };
       props.setTaskList((prevTaskList) => [...prevTaskList, task_details]);
       props.saveToLocalStorage([...props.taskList, task_details]);
       alert(`${props.taskName} added to the task list.`);
       props.setTaskName("");
       props.setTaskDesc("");

       
    }
    }
    const handleDropdownClick = (priorityValue) =>{
        
        props.setPriority(priorityValue);
    }
   
  return (
    <div className='container d-flex flex-column align-items-center'>
      <div className={`mb-3 text-start my-5 mx-5 text-${props.mode === 'light' ? 'black':'white'}`}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Enter Task Name</strong></label>
        <input className= {`form-control bg-${props.mode === 'light' ? 'secondary' : 'dark'} text-white`} id="exampleFormControlTextarea1" value={props.taskName} onChange={handleTaskNameClick} rows="1" style={{width : "500px"}}/>
        
      </div>
      <div className={`mb-3 text-start my-3 mx-5 text-${props.mode === 'light' ? 'black':'white'}`}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Description</strong></label>
        <textarea className= {`form-control bg-${props.mode === 'light' ? 'secondary' : 'dark'} text-white`} value={props.taskDesc} onChange={handleDescClick} id="exampleFormControlTextarea1" rows="4" style={{width : "500px"}}/>

        <div className="dropdown my-4">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Priority
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" onClick={()=>handleDropdownClick('Low')} >Low</a></li>
                <li><a className="dropdown-item" onClick={()=>handleDropdownClick('Medium')}>Medium </a></li>
                <li><a className="dropdown-item" onClick={()=>handleDropdownClick('High')}>High</a></li>
            </ul>
            </div>

        <button type="button" onClick={handleAddTaskClick} className="btn btn-primary my-3">Add Task</button>
        
      </div>

    </div>
  )
}

export default AddTask
