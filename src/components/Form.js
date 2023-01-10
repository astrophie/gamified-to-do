import React from "react";

function Form(props) {

    // handle input text in form
    const inputTextHandler = (e) => {
      props.setInputText(e.target.value);
    }

    // submit task button
    const submitTaskHandler  = (e) => {
      // prevent page refresh on click
      e.preventDefault();

      // only submit task if non-empty
      if (props.inputText !== "") {
        props.setTasks([
          ...props.tasks, {text: props.inputText, completed: false, id: Math.random()*1267}
        ]);
        props.setInputText("");
        props.setCoins(props.coins + 10);
      }
    }

    const statusHandler = (e) => {
      // console.log(e.target.value);
      props.setStatus(e.target.value);
    }


    return (
    <form>
      <div className="todo--field">
        <input 
          value={props.inputText}
          onChange={inputTextHandler} type="text" 
          className="todo-input" />
        <button onClick={submitTaskHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>

      </div>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">all</option>
          <option value="complete">complete</option>
          <option value="incomplete">incomplete</option>
        </select>
      </div>
    </form>

    );
  }
  
  export default Form;
  