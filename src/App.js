import './App.css';
import Searchbar from "./components/Searchbar";
import News from "./components/News";

function App() {
  return (
    <div className="container">
        <div className="row mt-30">
            <div className="col">
                <h1>Hacker News API</h1>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Searchbar />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <News />
            </div>
        </div>
    </div>
  );
}

export default App;
