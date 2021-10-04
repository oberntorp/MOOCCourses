import styles from "./User.module.css";

const User = (props) => {
  return (
    <div className={styles.User}>
      <span className={styles.UserName}>{props.username}</span>
      <span className={styles.Age}>{props.age}</span>
    </div>
  );
};

export default User;
