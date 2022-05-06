import React, {useState} from 'react';

function App() {
  const [i, setI] = useState(5)
  const [b, setB] = useState('text in input')

  function increment(){
    setI(i+1)
  }
  function decrement(){
   setI(i-1)
  }
  return (
    <div className="App">
      <h1>{i}</h1>
      <h1>{b}</h1>
      <input type='text'
       value={b}
       onChange={event=>setB(event.target.value)}/>
      
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
