import React, {useState, useEffect} from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {

    const defaultTask1 = new Task('Ejemplo1', 'Descripción1 ', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Ejemplo2', 'Descripción2 ', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Ejemplo3', 'Descripción3', false, LEVELS.BLOCKING);
    
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
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
        <div className='col-12'>
           <div className='card'>
           {/* Card Header (title) */}
              <div className='card-header p-3'>
                <h5>
                  Tus Tareas: 
                </h5>
              </div>
              {/* Card Body (content)*/}
              <div className='card-body' data-mdb-perfect-scrollbar = 'true' style = { {position: 'relative', height: '400px'}}>
                 <table>
                   <thead>
                      <tr>
                        <th scope='col'> TITULO </th>
                        <th scope='col'> DESCRIPCIÓN </th>
                        <th scope='col'> PRIORIDAD </th>
                        <th scope='col'> ACCIONES </th>
                      </tr>
                    </thead>
                 </table>
                 <tbody>
                    {tasks.map((task, index)=>{
                      return(
                       <TaskComponent
                        key={index} 
                        task = {task}>
                        </TaskComponent> 
                      )
                    }
                    )}
                 </tbody>
              </div>
           </div>
        </div>
    </div>
    )
}

export default TaskListComponent;