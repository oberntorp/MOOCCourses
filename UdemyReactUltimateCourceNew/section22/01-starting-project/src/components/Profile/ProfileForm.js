import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import AuthContext, { fireBaseApiKey } from "../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const newPasswordRef = useRef();
  const authContext = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordRef.current.value;

    if (enteredNewPassword.length < 7) {
      setIsPasswordValid(false);
      return;
    }
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${fireBaseApiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authContext.token,
          password: enteredNewPassword,
          returnSucureToken: false,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((response) => {
            let errorMessage = "Authentication failed";
            if (response && response.error && response.error.message) {
              errorMessage = response.error.message;
              throw new Error(errorMessage);
            }
          });
        }
      })
      .then((data) => {
        history.replace("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
        {!isPasswordValid && (
          <p className={classes.error}>Please add a valid password</p>
        )}
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
