const TodoItem = ({ item, onDelete, onToggle }) => {
   const { id, text, isChk } = item
   return (
      <li className={isChk ? "on" : ""}>
         <span onClick={() => onToggle(id)}>{id}</span>
         <em onClick={() => onToggle(id)}>{text}</em>
         <button onClick={() => onDelete(id)}>삭제</button>
      </li>
   );
};

export default TodoItem;