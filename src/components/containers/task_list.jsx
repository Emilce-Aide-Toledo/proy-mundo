import React, {useState, useEffect} from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {

    const defaultTask = new Task('Ejemplo', 'Descripción por defecto', false, LEVELS.NORMAL);
    
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);
    
    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is goin to unmount...')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO')
    }

    return (
    <div>
        <div>
            Yours Tasks:
        </div>
        <TaskComponent task = {defaultTask}></TaskComponent>
    </div>
    )
}

export default TaskListComponent;