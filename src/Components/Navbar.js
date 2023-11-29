import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const handleModeClick = ()=>{
        if(props.mode === 'light'){
            props.setMode('dark');
            props.setModeText('Enable Light Mode');
            console.log('Dark mode enabled')
            document.body.style.backgroundColor = "#153657";
        }else{
            props.setMode('light');
            props.setModeText('Enable Dark Mode');
            console.log("Dark mode enabled");
            document.body.style.backgroundColor = "#b7bdbe";
        } 
    }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark'? 'dark':'light'} bg-${props.mode === 'dark'? 'dark':'light'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>To|Doer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addtask">Add Task</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tasklist">Task List</Link>
        </li>
        
        
      </ul>
      <div className="  form-check form-switch text-white">
        <input className="dark-mode form-check-input" type="checkbox" onClick={handleModeClick} role="switch" id="flexSwitchCheckDefault"/>
        <label className={`dark-mode form-check-label text-${props.mode === 'light' ? 'black' : 'white'}`} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
</div>
    </div>
  </div>
  
</nav>
    </div>
  )
}

export default Navbar
