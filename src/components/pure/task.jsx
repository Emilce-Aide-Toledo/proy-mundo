import React, {useEffect} from "react";
import Proptypes from 'prop-types';
import { Task } from "../../models/task.class";
import '../../styles/task.scss'
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task }) =>{

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    /**
     * Funcion que retorna una insignia dependiendo del estado de la tarea
     */

    const taskLevelBadge = () =>{
        switch (task.level){
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )  
             case LEVELS.BLOCKING:
                    return(
                        <h6 className='mb-0'>
                            <span className='badge bg-danger'>
                                {task.level}
                            </span>
                        </h6>
                    )    
        default:
            break;
        }
    }
    
    /**
     * Función que retorna el estado de la tarea
     */
    const taskCompletedIcon = () => {
        if(task.completed){
            return  (<i className='bi-toggle-on' style={ { color: 'green'}}></i>)
        }else{
            return (<i className='bi-toggle-off' style={ { color: 'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                 <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
            {/**Función que retorna una insignia según la importancia de la tarea */}
               {taskLevelBadge()}
            </td>
            <td className='align-middle'>
            {/* Función que retorna el avance o estado  de la tarea */}
                {taskCompletedIcon()}
                <i className='bi-trash' style={ { color: 'tomato'}}></i>
            </td>
        </tr>
    )
};


TaskComponent.protoTypes ={
    task: Proptypes.instanceOf(Task)
};

export default TaskComponent;