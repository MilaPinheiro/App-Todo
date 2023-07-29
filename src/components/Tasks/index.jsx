import styles from './tasks.module.css'
import { Task } from '../../components/Task'


export function Tasks({tasksProps, tasksPropsFuncao}) {

    const tasksAmount = tasksProps.length

    const concludedTasksAmount = tasksProps.filter((task) => {
        return task.concluded
    }).length

    console.log(concludedTasksAmount)
    

    return (
        <section className={styles.tasks}> 
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{tasksAmount}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>{concludedTasksAmount} de {tasksAmount}</span>
                </div>
            </header>

            <ul className={styles.list}>
                {
                    tasksProps.map((item) => {
                        return <Task key={item.id} 
                        taskIdProps={item.id}
                        taskNameProps={item.name}
                        taskConcludedProps={item.concluded}/>
                    })
                }  
            </ul>
        </section>
    )
}