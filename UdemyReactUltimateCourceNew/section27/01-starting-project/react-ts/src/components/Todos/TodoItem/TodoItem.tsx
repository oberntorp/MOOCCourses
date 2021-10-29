import Todo from "../../../models/Todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ item: Todo; onRemove: () => void }> = (props) => {
  return (
    <li onClick={props.onRemove} className={classes.item} key={props.item.id}>
      {props.item.text}
    </li>
  );
};

export default TodoItem;
