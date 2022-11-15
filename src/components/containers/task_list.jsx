import React, {useState, useEffect} from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskForm from "../pure/forms/taskForm";
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

    const completeTask = (task)=>{
      console.log('Complete this Task:', task)
      const index = tasks.indexOf(task);
      const tempTask = [...tasks];
      tempTask[index].completed = !tempTask[index].completed
      setTasks(tempTask)
    }

    const deleteTask = (task) =>{
      console.log('Delete this Task:', task)
      const index = tasks.indexOf(task);
      const tempTask = [...tasks];
      tempTask.splice(index,1)
      setTasks(tempTask)
    }

    const addTask = (task) =>{
      console.log('Delete this Task:', task)
      const tempTask = [...tasks];
      tempTask.push(task)
      setTasks(tempTask)
    }

    const Table = () =>{
      return(
        <table>
        <thead>
           <tr>
             <th scope='col'> TITULO </th>
             <th scope='col'> DESCRIPCIÓN </th>
             <th scope='col'> PRIORIDAD </th>
             <th scope='col'> ACCIONES </th>
           </tr>
         </thead>
        <tbody>
         {tasks.map((task, index)=>{
           return(
            <TaskComponent
             key={index} 
             task = {task}
             complete = {completeTask}
             remove={deleteTask}
             >
             </TaskComponent> 
           )
         }
         )}
      </tbody>
     </table>

      )
    }

    let tasksTable;

    if(tasks.length > 0){
      tasksTable = <Table></Table>
    }else{
      tasksTable = (
      <div>
      <h3>No hay tareas que mostrar</h3>
      <h6>Ya puedes crear tu primer tarea</h6>
      </div>
      )
    }
    
    const loadingStyle = {
      color: 'grey',
      fontSize: '20px',
      fontWeigth: 'bold'
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
              {/**TODO: Add Loading Spinner */}
               {loading ? (<p style = {loadingStyle}>Cargando tareas</p>)  : tasksTable}
              </div>
           </div>
        </div>
              <TaskForm add={addTask}  length= {tasks.length}></TaskForm>
    </div>
    )
}

export default TaskListComponent;