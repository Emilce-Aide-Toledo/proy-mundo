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
        <tr className='fw-normal'>
            <th>
                 <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
            {/**TODO: Sustituir por una insignia */}
                <span>{task.level}</span>
            </td>
            <td className='align-middle'>
             {/**TODO: Sustituir por iconos*/}
                <span>{task.completed}</span>
            </td>
        </tr>
    )
};


TaskComponent.protoTypes ={
    task: Proptypes.instanceOf(Task)
};

export default TaskComponent;