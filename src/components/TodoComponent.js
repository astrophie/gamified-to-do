import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"

// import components
import Form from './Form';
import Todo from './Todos';
import { Container } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

function TodoComponent({setCoins, coins}){

  // states
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  // functions
  const filterHandler = () => {
    switch(status) {
      case "complete":
        setFiltered(tasks.filter(task => task.completed === true));
        break;
      case "incomplete":
        setFiltered(tasks.filter(task => task.completed === false));
        break;
      default:
        setFiltered(tasks)
        break;
    }
  }
  
  // save to local
  const saveLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } 

  const getLocal = () => {
    if(localStorage.getItem("tasks") == null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("tasks"));
      setTasks(localTodos);
    }
  }

  // run once at beginning
  useEffect(() => {
    getLocal();
  }, [])
  
     
  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [coins, tasks, status])


  return (
    <div className="App" >
      <Container>
      <header><h1 className="p-3">to-do list</h1></header>
      <header><h3>Coins: {coins}$</h3></header>
      <Form 
        tasks={tasks} 
        setTasks={setTasks} 
        inputText={inputText}
        setInputText={setInputText}
        status = {status}
        setStatus = {setStatus}

        coins={coins}
        setCoins={setCoins}
        ></Form>
  
      <Todo 
        coins={coins}
        setCoins={setCoins}
      
        filtered = {filtered}
        setTasks={setTasks}
        tasks={tasks}>
      </Todo>
      </Container>

    </div>
  );
}

export default TodoComponent;
