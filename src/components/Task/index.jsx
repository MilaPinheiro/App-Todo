import styles from './task.module.css'
import trash from '../../assets/trash.svg'


export function Task({taskIdProps, taskNameProps, taskConcludedProps, tasksPropsFuncao, concludedTaskNow}) {

    function handleIsConcluded(event) {
        concludedTaskNow(taskIdProps);
      }
 
    return (
    <li className={styles.taskNew}>

        <input
          
            type="checkbox"
            id={`checkbox-${taskIdProps}`}
            title={
                taskConcludedProps
                ? 'Desmarcar tarefa como concluída'
                : 'Marcar tarefa como concluída'
            }
            className={styles.checkbox}
            onChange={handleIsConcluded}
            checked={taskConcludedProps}
        />
        <label htmlFor={`checkbox-${taskIdProps}`} className={styles.label}>
            {taskConcludedProps
                ? 'Desmarcar tarefa como concluída'
                : 'Marcar tarefa como concluída'}
        </label>
        

        <p style={{ textDecoration: taskConcludedProps ? 'line-through' : 'none' }}>{taskNameProps}</p>

        <button className={styles.iconButton} onClick={() => tasksPropsFuncao(taskIdProps)}>
                <img  src={trash} />
        </button>
    </li>
    )
}