import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/**PAGES */
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/login";
import Register from './pages/Register/register'

/**HOTELS */
import Tower from './hotelDetails/TowerStreet'
import Ace from './hotelDetails/acehotel'
import Aura from './hotelDetails/aurastays'
import Golden from './hotelDetails/goldencherry'
import Moonlight from './hotelDetails/moonlight'
import Om from './hotelDetails/omcomplex'
import Rdb from './hotelDetails/rdbstays'
import Sun from './hotelDetails/Sun&Star'
import Sunshine from './hotelDetails/sunshine'
import Swaraj from './hotelDetails/swarajresort'
import ThePark from './hotelDetails/Thepark'
import Vitara from './hotelDetails/vitararesort'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>


        <Route path="/SearchedHotels" element={<List/>}/>
        <Route path="/Home" element={<Home/>}/>


        <Route path='/TowerStreet' element={<Tower/>}/>
        <Route path='/aurastays' element={<Aura/>}/>
        <Route path='/goldencherry' element={<Golden/>}/>
        <Route path='/moonlight' element={<Moonlight/>}/>
        <Route path='/omcomplex' element={<Om/>}/>
        <Route path='/rdbstays' element={<Rdb/>}/>
        <Route path='/Sun&star' element={<Sun/>}/>
        <Route path='/Sunshine' element={<Sunshine/>}/>
        <Route path='/Swaraj' element={<Swaraj/>}/>
        <Route path='/thepark' element={<ThePark/>}/>
        <Route path='/vitararesort' element={<Vitara/>}/>
        <Route path='/acehotel' element={<Ace/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
