import "./App.css";

function App() {  
  const Users = [
    { name: "Jush", age: 19  },
    { name: "Andrew", age: 21  },
    { name: "Dom", age: 15 },
    { name: "Blake", age: 14 },
    { name: "Chris", age: 18 },
  ];

  //  write code to loop thru each of these planets and dispaly their names.
  //  display names only if they are a gas giant

  return (
  <div className="App">
     {/* loop thru each of the Users */}
     {/* ask each Users using the KEY IF the User is OF AGE */}
     {/*  You have to wrap .map or any JavaScript expressoin wit curly braces to indicate that its a JavaScript expressoin that needs to be evaluated */}
    {Users.map(
      (person, key) => {if (person.age >= 18) return <h1> {person.name}</h1>;    {/* then return the name of users who are OF AGE accessing it using the key */}
      })}
  </div>
  );
}
  
export default App;
