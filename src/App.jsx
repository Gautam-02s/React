import React, { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(12);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    
  };

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
