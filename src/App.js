import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Navbar } from "./pages/Navbar";

function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        {/* ANYTHING YOU DO BELOW THOSE LINKS (OR NAVBAR COMPONENT") WILL CHANGE DEPENDING ON WHICH COMPONENT WE ARE IN */}


        {/* ROUTES IS USED TO DEFINE ALL THE ROUTES*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<h1> 404 PAGE NOT FOUND </h1>} />
        </Routes>
        <div> Footer  </div>
      </Router>
    </div>

  )

}

export default App;