import "./App.css";
import NavBar from "./components/navbar-comp/NavBar.js";
import ShowList from "./components/item-list-conteiner/ShowList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ShowList>
          <p>Listado de Instrumentos</p>
        </ShowList>
      </header>
    </div>
  );
}

export default App;
