const todoKey="reactTodo";

export const getLocalStorageTodoData=()=>{
    const rawTodos=localStorage.getItem(todoKey);
    if(rawTodos==null) return [];
    return JSON.parse(rawTodos);
};
export const setLocalStorageTodoData=(task)=>{
   return localStorage.setItem("reactTodo",JSON.stringify(task));
};