import TaskShow from "./TaskShow";

function TaskList({tasks,onDelete,onUpdated}) {
    return <div className="task-list">
        {tasks.map((task,index)=>{
            return (
                <TaskShow key={index} task={task} onDelete={onDelete} onUpdated={onUpdated}/>
            )
        })}
    </div>;
}

export default TaskList;

// tasks, app.js'enden aldığımız propsdur.