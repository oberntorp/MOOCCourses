import React, { useState } from 'react';
import './App.css';
import Char from './Char/Char';
import Validation from './Validation/Validation';

function App() {
  const [state, setState] = useState({textEntered: ""});

  const setTextEnteredHandler = (event) =>
  {
    const textEntered = event.target.value;
    setState({textEntered: textEntered});
  }

  const deleteCharHandler = (index) =>
  {
    let textInputToArray = state.textEntered.split("");
    textInputToArray.splice(index, 1)
    const updatedText = textInputToArray.join("");
    setState({ textEntered: updatedText });
  }

  const listChars = state.textEntered.split("").map((letterOfWord, index) => <Char key={index} letter={letterOfWord} click={() => deleteCharHandler(index)} />);
  return (
    <div className="App">
      <input type="text" onChange={setTextEnteredHandler} value={state.textEntered}/>
      <p>{state.textEntered.length}</p>
      {listChars}
      <Validation textLength={state.textEntered.length} />
    </div>
  );
}

export default App;
