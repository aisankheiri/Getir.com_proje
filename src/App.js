import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navbar/>} />
          
        </Routes>
      </Router>
  );
}

export default App;
