//STYLES
import "./App.css";

//LIBRARIES
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

//COMPONENTS
import NavBar from "./components/navbar-comp/NavBar.js";
import HomePage from "./components/pages/Home";
import ContactPage from "./components/pages/Contact";
import ItemDetails from "./components/pages/ItemDetails"
import AboutUs from "./components/pages/AboutUs"
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contacto' element={ <ContactPage /> } />
          <Route path='/productos/:id' element={ <ItemDetails /> } />
          <Route path='/Nosotros' element={ <AboutUs /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <ShowList>
          <p>Productos en Oferta</p>
        </ShowList>
      </header> */}
    </div>
  );
}

export default App;
