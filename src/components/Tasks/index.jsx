import styles from './tasks.module.css'
import { Task } from '../../components/Task'
import clipboard from '../../assets/Clipboard.svg'

export function Tasks({tasksProps, tasksPropsFuncao, concludedTaskNow}) {

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
                        tasksPropsFuncao={tasksPropsFuncao}
                        concludedTaskNow={concludedTaskNow}
                        taskConcludedProps={item.concluded}/>
                    })}

                    {tasksProps.length <= 0  && (
                         <section className={styles.NoTasks}> 
                             <img  src={clipboard} />
                             <div>
                                <p>Você ainda não tem tarefas cadastradas</p>
                                <span>Crie tarefas e organize seus itens a fazer</span>
                             </div>
                         </section>
                    )}  
            </ul>
        </section>
    )
}