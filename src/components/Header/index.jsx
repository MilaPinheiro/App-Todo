import { useState } from 'react'
import todoLogo from '../../assets/todo-logo.svg' 
import plus from '../../assets/plus.svg'
import styles from './header.module.css'


export function Header({tasksProps, setTasksProps}) { 

    const [taskName, setTaskName]= useState("")

    function changeInput(event) {
        console.log(event.target.value)
        setTaskName(event.target.value)
   
    }

    function addTasks() {

        const newTask = {
            id: Date.now(),
            name: taskName,
            concluded: false
         }
         console.log(newTask)

     setTasksProps([...tasksProps, newTask])
        console.log([...tasksProps, newTask])
     setTaskName('')
        console.log(setTaskName)
    }


    
    return (
        <header className={styles.header}>
            <img className={styles.imgOne} src={todoLogo}/>

            <div className={styles.form}>
                <input onChange={changeInput} value={taskName} placeholder='Adicione uma nova tarefa'/>
                <button onClick={addTasks} className={styles.buttonOne}>
                        <span>Criar</span>
                        <img src={plus} />
                </button>
            </div>
        </header>
    )
}


