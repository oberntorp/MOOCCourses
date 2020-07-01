import React, { useState } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

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

  const listCharComponents = state.textEntered.split("").map((letterOfWord, index) => <CharComponent key={index} letter={letterOfWord} click={() => deleteChar(index)} />);
  return (
    <div className="App">
      <input type="text" onChange={setTextEntered} value={state.textEntered}/>
      <p>{state.textEntered.length}</p>
      <ValidationComponent textLength={state.textEntered.length} />
      {listCharComponents}
    </div>
  );
}

export default App;
