import React, { useState } from 'react';
import './App.css';
import Char from './Char/Char';
import Validation from './Validation/Validation';

function App() {
  const [state, setState] = useState({textEntered: ""});

  const setTextEntered = (event) =>
  {
    const textEntered = event.target.value;
    setState({textEntered: textEntered});
  }

  const deleteChar = (index) =>
  {
    let textInputToArray = state.textEntered.split("");
    textInputToArray.splice(index, 1)
    const updatedText = textInputToArray.join("");
    setState({ textEntered: updatedText });
  }

  const listChars = state.textEntered.split("").map((letterOfWord, index) => <Char key={index} letter={letterOfWord} click={() => deleteChar(index)} />);
  return (
    <div className="App">
      <input type="text" onChange={setTextEntered} value={state.textEntered}/>
      <p>{state.textEntered.length}</p>
      {listChars}
      <Validation textLength={state.textEntered.length} />
    </div>
  );
}

export default App;
