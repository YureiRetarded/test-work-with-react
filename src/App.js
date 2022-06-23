import React, {useState} from "react";
import Counter from "./Components/Counter";

function App() {

    const [value, setValue] = useState('Текст')
  return (
    <div className="App">
       <Counter/>
    </div>
  );
}

export default App;
