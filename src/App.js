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
      {counter === 7 ? <h1>There are seven deadly sins and you are the worst one</h1> : ""}
      
    </div>
  );
}

export default App;
