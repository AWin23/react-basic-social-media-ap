import './App.css';

function App() {

  return (
  <div className="App"> 
    <div>
      <User name="Pedro" age={21} email="pedro@pedro.com" />
      <User name="Andrew" age={21} email="andrew@andrew.com"  />
      <User name="Dominic" age={4} email="dom@dom.com"  />
    </div>
    <div>
      <JobInfo salary={90000} position="Senior SDE" company="Amazon" />
      <JobInfo salary={12000} position="Junior SDE" company="Google" />
      <JobInfo salary={90000} position="Project Manager" company="Netflix" />
    </div>
  </div>
  );
}

//  this is a REACT component. 
//  components will alwayas be returning UI STUFF like h1, divs, etc
//  React Components always start wit uppercase letter
const User = (props) => {
  return( 
  <div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.email}</h1>
  </div>
  );
}

const JobInfo = (props) => {
  return(
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  )
}

export default App;
