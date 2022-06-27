import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Splashscreen from './components/Splashscreen';
import Googlemaps from './components/Googlemaps';
import Seller from './components/Seller';
import BuyerHomePage from '../src/components/BuyerHomePage'
import Manufacturer from './components/Manufacturer';
function App() {
  return (
    <>
    <Router>
    <Routes>
          <Route exact path='/homepage' element={<BuyerHomePage />}></Route>
          <Route exact path='/maps' element={<Googlemaps />}></Route>
          <Route exact path='/seller' element={<Seller />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/buyer' element={<BuyerHomePage />}></Route>
          <Route exact path='/manufacturer' element={<Manufacturer />}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
