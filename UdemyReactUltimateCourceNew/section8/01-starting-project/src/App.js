import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const addUserOnClickHandler = (newUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };
  return (
    <div>
      <AddUser addUserHandler={addUserOnClickHandler} />
      <UsersList usersAdded={users} />
    </div>
  );
}

export default App;
