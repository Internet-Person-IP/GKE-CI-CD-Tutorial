import { useState } from 'react';
import './App.css';


const App = () => {
  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={()=> setCounter(counter+1)}>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
