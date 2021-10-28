import { useState } from "react";
import Output from "./Output";

const Greeting = (props) => {
  const [textChanged, setTextChanged] = useState(false);

  const changeTextHandler = () => {
    setTextChanged(true);
  };
  return (
    <div>
      <h1>Hello World!</h1>
      {!textChanged && <Output>It is good to see you!</Output>}
      {textChanged && (
        <Output>It is good to see you, and I hope you are doing well!</Output>
      )}
      <button onClick={changeTextHandler}>Show comprehensive greeting!</button>
    </div>
  );
};

export default Greeting;
