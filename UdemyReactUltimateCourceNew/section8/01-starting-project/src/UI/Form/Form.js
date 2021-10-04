import { useState } from "react";
import Button from "../Button/Button";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setError(null);
    if (username.trim().length === 0 && age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter username and age",
      });
      props.sendError(error);
      return;
    }
    if (+age.trim() < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age, > 1",
      });
      props.sendError(error);
      return;
    }
    props.userAddedHandler(username, age);
    setUsername("");
    setAge("");
  };

  const setEnteredUsername = (event) => {
    setUsername(event.target.value);
  };

  const setEnteredAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={setEnteredUsername}
      />
      <label htmlFor="age">Age</label>
      <input type="text" id="age" value={age} onChange={setEnteredAge} />
      <Button onClick={onSubmitHandler}>Add User</Button>
    </form>
  );
};

export default Form;
