import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';


function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Router>
      <Header  isLoading={isLoading} />
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
