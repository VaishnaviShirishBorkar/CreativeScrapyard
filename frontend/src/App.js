import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Loginsignup from './Pages/Loginsignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/homedecor' element={<Shopcategory category="homedecor"/>} />
        <Route path='/Environment' element={<Shopcategory category="Environment"/>} />
        <Route path='/GardenandOutdoors' element={<Shopcategory category="Garden and Outdoors"/>} />
        <Route path='/Kids' element={<Shopcategory category="Kids"/>} />
        <Route path='product' element={<Product/>} >
          <Route path=':productId' element={<Product/>} />
          </Route>

          <Route path='/cart' element={<Cart/>} />
          <Route path='/signup' element={<Loginsignup/>} />
          <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
