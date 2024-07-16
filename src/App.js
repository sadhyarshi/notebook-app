import React, { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(`Sum: ${sum}`);
  };

  return (
    <div className="App">
      <h1>Add Two Numbers</h1>
      <input
        type="number"
        placeholder="Enter number 1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter number 2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <br />
      <button onClick={handleAddition}>Add Numbers</button>
      <br />
      <p>{result}</p>
    </div>
  );
}


export default App;
