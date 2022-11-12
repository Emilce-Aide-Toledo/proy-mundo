import React from "react";
import Proptypes from 'prop-types';
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) =>{
    return (
        <div>
            <h2>
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