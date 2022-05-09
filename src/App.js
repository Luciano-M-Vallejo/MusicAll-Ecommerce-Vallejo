//STYLES
import "./App.css";

//LIBRARIES
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

//COMPONENTS
import NavBar from "./components/navbar-comp/NavBar.js";
import Footer from "./components/footer/Footer";
import HomePage from "./components/pages/Home";
import ContactPage from "./components/pages/Contact";
import ItemDetailContainer from "./components/pages/ItemDetailContainer"
import AboutUs from "./components/pages/AboutUs"
import InstrumentsCategory from "./components/pages/InstrumentsCategory"
import CartPage from "./components/pages/CartPage";
import NotFound from "./components/pages/NotFound";
import {CartProvider} from "./components/context/CartContext";

function App() {
  return (
      <div className="App">
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/contacto' element={<ContactPage />} />
              <Route path='/productos' element={<InstrumentsCategory />} />
              <Route path='/productos/:id' element={ <ItemDetailContainer /> } />
              <Route path='/Nosotros' element={<AboutUs />} />
              <Route path="/carrito" element={<CartPage />}/>
              <Route path='*' element={ <NotFound /> } />
            </Routes>
          </BrowserRouter>
        </CartProvider>
        <Footer />
      </div>
  );
}

export default App;
