import "./Todo.css";
import {  useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {setLocalStorageTodoData, getLocalStorageTodoData} from "./ToDoLocalStorage"



export const Todo = () => {
    //useState

const [task, setTask] = useState(()=>
  getLocalStorageTodoData()
  );


  //handlefunctions

  const handleFormSubmit = (inputValue) => {
   const {id,content,checked}=inputValue;
    if (!content) return;
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched=task.find((currTask)=>currTask.content===content);
    if(ifTodoContentMatched) return;
    setTask((prev) => [...prev, {id,content,checked}]);
    
  };



 

//called every second changes date and time
 

const handleCheckedTodo=(content)=>{
const updatedTask=task.map((currTask)=>{
  if(currTask.content===content){
    return { ...currTask,checked:!currTask.checked};
  }
  else{
    return currTask;
  }
})
setTask(updatedTask);
}

//adding data to local storage
setLocalStorageTodoData(task);


  const handleDeleteTodo = (value) => {
    // setTask([]);
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
  };
  const handleToData = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>ToDo List</h1>
      <TodoDate/>
      </header>
     <TodoForm onAddTodo={handleFormSubmit}/>
      
      <section className="myUnordList">
        <ul>
          {task.map((currTask, index) => {
            return <TodoList key={currTask.id} 
            data={currTask.content}  
            checked={currTask.checked} 
            onhandleDeleteTodo={handleDeleteTodo} 
            onhandleCheckedTodo={handleCheckedTodo}/>
          })}
        </ul>
      </section>

      <button className="clear-btn" onClick={handleToData}>
        Clear
      </button>
    </section>
  );
};
