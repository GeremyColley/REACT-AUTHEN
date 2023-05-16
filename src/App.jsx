import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
//import Login from "./pages/Login";
//<Route path="/login" element={<Login setUser={setUser} />} />

function App() {
  //const [token, setToken] = useState(Cookies.get("token") || null);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <Router>
      <Header
        setUser={setUser}
        token={token}
      />
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} />} />
        
      </Routes>
    </Router>
  )
}

export default App
