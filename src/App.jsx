import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { useState } from 'react'


function App() {

  const [tasks, setTasks]= useState([])


  function deleteTask(taskIdProps) {
    console.log(taskIdProps)
    const updatedNewTask = tasks.filter((task) => task.id !== taskIdProps)
    setTasks(updatedNewTask)
    console.log( updatedNewTask)
 }

 function concludedTaskNow(taskIdProps) {
  //console.log(taskIdProps)
  const updatedConcludedTasks = tasks.map((task) =>
  task.id === taskIdProps ? { ...task, concluded: !task.concluded } : task

);

setTasks(updatedConcludedTasks);

}

  return (
    <>
      <Header tasksProps={tasks} setTasksProps={setTasks}/>

      <Tasks tasksProps={tasks} tasksPropsFuncao={deleteTask} concludedTaskNow={concludedTaskNow}/>

    </>
     
  )
}

export default App
