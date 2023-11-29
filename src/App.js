import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';


function App() {

  const [mode,setMode] = useState("light");
  const [modeText,setModeText] = useState("Enable Dark Mode");
  const [taskList,setTaskList] = useState([]);
  const [taskName,setTaskName] = useState("");
  const [taskDesc,setTaskDesc] = useState("");
  const [priority,setPriority] = useState("");
   
   const saveToLocalStorage = (items) =>{
        localStorage.setItem('todo_list_items',JSON.stringify(items));
      };

      useEffect(() => {
        const list_local = JSON.parse(localStorage.getItem('todo_list_items')) || [];
        setTaskList(list_local);
      }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar mode={mode} setMode = {setMode} modeText = {modeText} setModeText = {setModeText}/>
       <Routes>
        <Route path = "/" element={<Home mode={mode}/>}></Route>
        <Route path = "/addtask" element = {<AddTask mode={mode} taskList={taskList} setTaskList = {setTaskList} taskName={taskName} setTaskName={setTaskName} taskDesc={taskDesc} setTaskDesc={setTaskDesc} priority={priority} setPriority={setPriority} saveToLocalStorage={saveToLocalStorage} />}></Route>
        <Route path = "/tasklist" element ={<TaskList mode={mode} taskList={taskList} setTaskList={setTaskList} saveToLocalStorage={saveToLocalStorage} />}></Route>
        
       
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
