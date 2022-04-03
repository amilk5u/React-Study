import TodoItem from './TodoItem'
import './TodoList.css'
const TodoList = ({ data, onDelete, onToggle }) => {
   return (
      <ul className="TodoList">
         {
            data.map(item => <TodoItem key={item.id} item={item} onDelete={onDelete} onToggle={onToggle} />)
         }
      </ul>
   );
};

export default TodoList;