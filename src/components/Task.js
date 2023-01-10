import React from "react";

function Task({task, tasks, setTasks, coins, setCoins}){
    // Events 
    const deleteHandler = () => {
        // console.log(task);

        setTasks(tasks.filter(elem => elem.id !== task.id));

        if (task.completed !== true) {
            setCoins(coins-10);
        }
    }

    const completeHandler = () => {
        // console.log(task);
        
        setTasks(tasks.map(item => {
            if (item.id === task.id) {
                if (item.completed === true) {
                    setCoins(coins-20);
                }

                else{
                    setCoins(coins+20)
                }

                return {...item, completed: !item.completed}
            }
            return item;
        }
        ));
    }

    return(
        <div className="todo">
            <li className={`todo--item ${task.completed ? "completed" : ""}`}> 
                {task.text}</li>
            <button onClick={completeHandler} className="complete--button"> 
                <i className="fa fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash--button"> 
                <i className="fa fa-trash"></i>
            </button>
        </div>
    )

}

export default Task;