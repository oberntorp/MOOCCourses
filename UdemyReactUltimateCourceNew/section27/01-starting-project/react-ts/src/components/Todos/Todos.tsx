import { useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import TodoItem from "./TodoItem/TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const context = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {context.items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemove={context.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
