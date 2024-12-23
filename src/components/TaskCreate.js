import {useState} from "react";

function TaskCreate({onCreate,task,taskformUpdate,onUpdate}) {
    const[title,setTitle]=useState(task? task.title:'');
    
    const[taskDesc,setTaskDesc]=useState(task? task.taskDesc:'');
    console.log(title,taskDesc);

    const handleChange=(event)=>{
      setTitle(event.target.value);
    };
    const handleTaskChange=(event)=>{
      setTaskDesc(event.target.value);
    };
    const handleSubmit=(event)=>{
      event.preventDefault();
      if(taskformUpdate){
        onUpdate(task.id,title,taskDesc);
      }
      else{
        onCreate(title,taskDesc);
      }
    
      // onCreate app.js'e göndereceğimiz propsun ismi.
      setTitle('');
      setTaskDesc('');
    }
    return  <div>
        {''}
          {taskformUpdate? 
          <div className="task-update">
             <h3>Please Edit Task!</h3>
            <form className="task-form">
              <label className="task-label">Edit Header</label>
              <input value={title} onChange={handleChange} className="task-input"/>
              <label className="task-label">Edit Task</label>
              <textarea value={taskDesc} onChange={handleTaskChange} className="task-input"rows={5}></textarea>
              <button className="task-button update-button"onClick={handleSubmit}>Edit</button>
           </form>
         </div>:  
          <div className="task-create">
             <h3>Please Add Task!</h3>
            <form className="task-form">
              <label className="task-label">Header</label>
              <input value={title} onChange={handleChange} className="task-input"/>
              <label className="task-label">Entry Task!</label>
              <textarea value={taskDesc} onChange={handleTaskChange} className="task-input"rows={5}></textarea>
              <button className="task-button"onClick={handleSubmit}>Create</button>
           </form>
         </div>}
      ;
           </div>;
}

export default TaskCreate;