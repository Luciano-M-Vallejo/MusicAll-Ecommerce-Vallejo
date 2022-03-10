import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import clavedeDo from "./assets/clavedeDo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={clavedeDo} alt="" height="80px" width="80px"></img>
          <p>MusicAll store</p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know us
        </a>
        <Button>bootstrap</Button>
      </header>
    </div>
  );
}

export default App;
