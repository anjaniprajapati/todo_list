import Image from 'next/image'
import styles from './page.module.css'
import TaskManager from './todo_list'

export default function Home() {
    return (
        <>
            <center>
                <h1>Task Manager</h1>
                <TaskManager />
            </center>
        </>
    
  )
}
