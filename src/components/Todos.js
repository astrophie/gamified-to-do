import React from "react";

// import components
import Task from "./Task";

function Todo({tasks, setTasks, coins, setCoins, filtered}){
    const taskElements = filtered.map(task => 
    <Task
        setTasks={setTasks} 
        tasks={tasks}
        task={task}
        key={task.id}

        coins={coins}
        setCoins={setCoins}
        >
    </Task>)

    return (
        <div className="todo--container">
            <ul className="todo--list">
                {taskElements}
            </ul>
        </div>
    )

}

export default Todo;