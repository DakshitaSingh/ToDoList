import { MdCheck ,MdDeleteForever} from "react-icons/md";
export const TodoList = ({data,checked,onhandleDeleteTodo,onhandleCheckedTodo}) => {
  
  return (
    <li className="todo-item">
      <span className={checked? "checkList":"notCheckList"}>{data}</span>
      <button className="check-btn" onClick={()=>onhandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button onClick={() => onhandleDeleteTodo(data)} className="delete-btn">
        <MdDeleteForever />
      </button>
    </li>
  );
};
