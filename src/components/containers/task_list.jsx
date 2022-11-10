import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import { TaskComponent } from "../../pure/forms/task";

const TaskListComponent = () => {

    const defaultTask = new Task('Ejemplo', 'Descripción por defecto', false, LEVELS.NORMAL);
    
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