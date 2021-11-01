import { useContext, useRef } from "react";
import { TodosContext } from "../../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const context = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTodoText = todoTextInputRef.current!.value.trim();

    if (enteredTodoText.length === 0) {
      return;
    }

    context.addTodo(enteredTodoText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>Todo text</label>
      <input type="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
