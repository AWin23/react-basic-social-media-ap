import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Navbar } from "./pages/Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext(); // used WHEN you want GROUP OF compoents to have acccess to same "data?
// When you have data that needs to be accessed by multiple components in your application, you can create a 
//  context to hold that data and use the useContext hook in the child components to access and use that data.

function App() {
  const [username, setUsername] = useState("Andrew Nguyen");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>

        <Router> {/* The <Router> component is the root component that needs to be placed around your entire application to enable routing functionality. 
      It provides the underlying routing infrastructure for React Router DOM.
      */}

          <Navbar />
          {/* ANYTHING YOU DO BELOW THOSE LINKS (OR NAVBAR COMPONENT") WILL CHANGE DEPENDING ON WHICH COMPONENT WE ARE IN */}


          {/* ROUTES IS USED TO DEFINE ALL THE ROUTES*/}
          <Routes>

            {/* define a specific route. It specifies the URL path for which the component should be rendered.*/}
            <Route path="/" element={<Home />} />
            <Route path="/profile"
              element={<Profile />}
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1> 404 PAGE NOT FOUND </h1>} />
          </Routes>
          <div> Footer  </div>
        </Router>
      </AppContext.Provider>
    </div>

  )

}

export default App;