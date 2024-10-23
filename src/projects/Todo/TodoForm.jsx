import { useState } from "react";
export const TodoForm=({onAddTodo})=>{
    const [inputValue, setInputValue] = useState({});
    const handleInputChange = (value) => {
        setInputValue({id:value,content:value,checked:false});
      };
      //form submit
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id:"",content:"",checked:false});
    }

    return(
      
        <section className="form">
        <form action="" onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autocomplete="off"
              value={inputValue.content}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add tasks
            </button>
          </div>
        </form>
      </section>
    )
}