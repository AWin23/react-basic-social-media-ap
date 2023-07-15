import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  //  https://excuser-three.vercel.app/v1/excuse/

  //  allows me to add state to functionali component
  //  returning two arrays "CURRENT STATE" and "FUNCTION TO UPDATE IT"
  //  hook takes an inital state val as argument and returns an updated state value to whenver setter function is called 
  const [generatedExcuse, setExcuse] = useState("");


  //  function that performs axios GET requests
  //  pass the "excuse" as a string in useState into the parameter so it adds to the
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
        console.log('excuse is fired');
      })

      //  additonal .catch will catch any error requests
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  //  return render function 
  //  ONCLICK buttons right, get it generate a URL to the user when clicked
  return (
    <div className="App">
      <h1> Generate An Excuse </h1>

      {/* onClick triggers the FETCHEXCUSE button that takes in whatever parameter the excuse is and ADDS TO THE URL */}

      {/*  the function gets called immediately when the component renders, instead of being triggered when the button is clicked. 
      This causes the fetchExcuse function to be called repeatedly, resulting in multiple API requests and console log messages.
      
      so passs a callback function instead
      */}

      {/* 
      When you wrap the fetchExcuse function call inside an arrow function, like () => fetchExcuse("party"), you're creating a new anonymous function. 
      This anonymous function acts as a callback function for the onClick event.

      The important thing to note here is that when the component renders, the arrow function itself is not immediately executed. 
      Instead, it is passed as a reference to the onClick event handler of the button.

      So, when you write onClick={() => fetchExcuse("party")}, you're essentially saying "when the button is clicked, execute this arrow function." 
      
      And within that arrow function, you call the fetchExcuse function with the desired parameter.
      */}

      <button onClick={() => fetchExcuse("party")}> Party </button>
      <button onClick={() => fetchExcuse("family")}> Family </button>
      <button onClick={() => fetchExcuse("office")}> Office </button>

        {/*  prints the excuse generated in a P tag */}
      <p> Excuse: {generatedExcuse} </p>
    </div>
  );
}

export default App;