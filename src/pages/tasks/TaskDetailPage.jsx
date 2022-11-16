import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = ({task}) => {

    const {id} = useParams();
    
    return (
        <div>
            <h1>Task Detail - {id}</h1>
            <h2> {task.name }</h2>
            <h4> {task.description }</h4>
        </div>
    );
}

export default TaskDetailPage;
