import Todo from "../../models/Todo";
import TodoItem from "./TodoItem/TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemove: (id: string) => void }> = (
  props
) => {
  <ul className={classes.todos}>
    {props.items.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        onRemove={props.onRemove.bind(null, item.id)}
      />
    ))}
  </ul>;
};

export default Todos;
