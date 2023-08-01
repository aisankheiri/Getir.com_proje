import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Getir from './Routes/Getir/Getir';
import GetirYemek from './Routes/GetirYemek/GetirYemek';
import GetirSu from './Routes/GetirSu/GetirSu';
import GetirCarsi from './Routes/GetirCarsi/GetirCarsi';
import GetirBuyuk from './Routes/GetirBuyuk/GetirBuyuk';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Getir/>} />
          <Route path="/yemek" element={<GetirYemek/>} />
          <Route path="/buyuk" element={<GetirBuyuk/>} />
          <Route path="/su" element={<GetirSu/>} />
          <Route path="/carsi" element={<GetirCarsi/>} />
          
        </Routes>
      </Router>
  );
}

export default App;
