import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Splashscreen from './components/Splashscreen';
import Googlemaps from './components/Googlemaps';
import BuyerHomePage from './components/BuyerHomePage';
import TopBar from './components/Topbar';
function App() {
  return (
    <>
    <div className="App container-fluid" style={{paddingLeft:0, paddingRight:0}}>
      <Login/>
    </div>
    </>
  );
}

export default App;
