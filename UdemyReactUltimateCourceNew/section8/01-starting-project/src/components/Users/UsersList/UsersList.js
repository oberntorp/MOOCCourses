import Card from "../../../UI/Card/Card";
import User from "../User/User";
import sytles from "./UsersList.module.css";

const UsersList = (props) => {
  const usersList =
    props.usersAdded.length > 0 ? (
      props.usersAdded.map((user) => {
        return <User key={user.id} username={user.username} age={user.age} />;
      })
    ) : (
      <p>No users added yet</p>
    );

  return <Card className={sytles.list}>{usersList}</Card>;
};

export default UsersList;
