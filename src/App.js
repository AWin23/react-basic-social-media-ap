import "./App.css";
import React, { useState } from 'react';


//  "States" are just a variable that holds data.
//  STATE (whoel point) is a variable that when its value changes, React will be notified and LOOK to see if the value is DIFF than before 
//  IF IT IS, it will trigger the UI to re-render .
//  to REDISPLAY the WHOLE UI
function App() {
  const [count, setCount] = useState(0);  //  initial value providied in 'useState' DETERMINES the type of state variables
  //  so now setCount has to take in AN INT. 

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  }

  const setToZero = () => {
    setCount(0);
  }

  
  return (
    <div className="App">
      <button
        onClick={() => {
          increment();
        }}>
        Increase </button>

      <button onClick={() => {
        decrement();
      }}
      >
        Decrease
      </button>

      <button onClick={() => {
        setToZero();
      }}> Set to Zero </button>

      {count}
    </div>
  );
  
  //  THIS WAS MY INITIAL SOLUTION BUT THE ONE SHOWN IS THE OPTIMIZED SOLUTION. I initally called the setCounts in the onClick which can work but its not as clean ig? 
  
  // return (
  //   <div className="App">
  //     <button
  //       onClick ={
  //       setCount(count + 1)
  //       }
  //     >
  //       Increase </button>
  
  //     <button onClick={
  //       setCount(count - 1)
  //     }
  //     >
  //       Decrease
  //     </button>
  
  //     <button onClick={
  //       setCount(0)
  //     }> Set to Zero </button>
  
  //     {count}
  //   </div>
  // );

}

export default App;