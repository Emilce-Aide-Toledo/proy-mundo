import React, {useEffect} from "react";
import Proptypes from 'prop-types';
import { Task } from "../../models/task.class";
import '../../styles/task.scss'

const TaskComponent = ({ task }) =>{

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);
    return (
        <div>
            <h2 className='task-name'>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripción: {task.description }
            </h3>
            <h3>
                Estado:  {task.level}
            </h3>
            <h4>
                La tarea esta: { task.completed ? 'COMPLETADA': 'PENDIENTE'}
            </h4>
        </div>
    )
};


TaskComponent.protoTypes ={
    task: Proptypes.instanceOf(Task)
};

export default TaskComponent;