import React from 'react'

function Home(props) {
  return (
    <div className={`container d-flex flex-column justify-content-center align-items-center text-${props.mode === 'light' ? 'dark':'white'}`} style={{width : '500px', height:'100vh'}} >
      <h1 className='fw-bolder fst-italic my-5'>To|Doer</h1>
      <p className={`text-${props.mode === 'light' ? 'dark':'white'} my-3`}> Manage your daily Tasks with us.Todoer can add your daily tasks in task list where user can mark tasks as completed or not.User can also delete tasks.</p>
      <h4>User can navigate through the application using navbar.</h4>
    </div>
  )
}

export default Home
