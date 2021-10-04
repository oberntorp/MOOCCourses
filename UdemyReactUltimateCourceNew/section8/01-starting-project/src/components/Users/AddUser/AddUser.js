import { useState } from "react";
import Card from "../../../UI/Card/Card";
import ErrorModal from "../../../UI/ErrorModal/ErrorModal";
import Form from "../../../UI/Form/Form";
import styles from "./AddUser.module.css";
const AddUser = (props) => {
  const [error, setError] = useState();
  const addUserHandler = (username, age) => {
    props.addUserHandler({
      id: `u-${Math.random().toString()}`,
      username: username,
      age: age,
    });
  };
  const errorHandler = (errorFromForm) => {
    if (errorFromForm) {
      setError(errorFromForm);
    }
  };

  const clearError = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={clearError}
        />
      )}
      <Card className={styles.input}>
        <Form userAddedHandler={addUserHandler} sendError={errorHandler}></Form>
      </Card>
    </div>
  );
};

export default AddUser;
