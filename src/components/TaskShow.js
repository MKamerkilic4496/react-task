import { useState } from "react"
import TaskCreate from "./TaskCreate";
import React from 'react';

function TaskShow ({task,onDelete,onUpdated}) {
    const[showEdit,setShowedit]=useState(false);
    const handleDeleteClick=()=>{
        onDelete(task.id);
    }
    const handleEditClick=()=>{
        setShowedit(!showEdit);
    }
    const handleSubmitsx=(id,updatedTitle,updatedTaskDesc)=>{
        setShowedit(false);
        onUpdated(id,updatedTitle,updatedTaskDesc);

    }
    console.log(task)
    return <div className="task-show">
             {showEdit?<TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmitsx}/>: 
             <div>
              <h3 className="task-title">Your Mission</h3>
               <p>{task.title}</p>
               <h3 className="task-title">To do List</h3>
                <p>{task.taskDesc}</p>
               <div>
                 <button className="task-delete" onClick={handleDeleteClick}>Delete</button>
                 <button className="task-edit"  onClick={handleEditClick}>Update</button>
              </div>
             </div>}
       
            </div>;
}

export default TaskShow;

// showEdit false olduğunda başlangıçtaki görüntü basılacak