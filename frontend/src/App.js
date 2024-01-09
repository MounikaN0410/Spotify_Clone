import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './views/login/login.js';
import Signup from './views/signup/signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

const Welcome=()=>{
  return(
    <div> Welcome Spotify</div>
  )

}

export default App;
