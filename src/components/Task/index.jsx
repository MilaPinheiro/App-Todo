import styles from './task.module.css'
import trash from '../../assets/trash.svg'


export function Task({taskIdProps, taskNameProps, taskConcludedProps, tasksPropsFuncao}) {

    return (
        <li className={styles.taskNew}>
            <div className={styles.check}>
            </div>

            <p>{taskNameProps}</p>

            <button className={styles.iconButton} onClick={() => tasksPropsFuncao(taskIdProps)}>
                <img  src={trash} />
            </button>
        </li>
    )
}