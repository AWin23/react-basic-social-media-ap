import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Navbar } from "./pages/Navbar";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const AppContext = createContext(); // used WHEN you want GROUP OF compoents to have acccess to same "data?
// When you have data that needs to be accessed by multiple components in your application, you can create a 
//  context to hold that data and use the useContext hook in the child components to access and use that data.

function App() {
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }});

  return (
    <div className="App">
      <QueryClientProvider client={client}>

        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile"
              element={<Profile />}
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1> 404 PAGE NOT FOUND </h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>

  )

}

export default App;