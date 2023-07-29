import { Header } from './components/Header'
import { Task } from './components/Task'
import { Tasks } from './components/Tasks'
import { useState } from 'react'


function App() {

  const [tasks, setTasks]= useState([])

  function deleteTask(taskIdProps) {
     console.log(deleteTask)
     const updatedNewTask = tasks.filter((task) => task.id !== taskIdProps)
    setTasks(updatedNewTask)
 }
 

  return (
    <>
      <Header tasksProps={tasks} setTasksProps={setTasks}/>

      <Tasks tasksProps={tasks} tasksPropsFuncao={deleteTask}/>

      <Task tasksPropsFuncao={deleteTask}/>
    </>
     
  )
}

export default App
