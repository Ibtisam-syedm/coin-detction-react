import logo from './logo.svg';
import './App.css';
import ImageUpload from './components/ImageUpload';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coins Counting</h1>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a> */}
        <ImageUpload/>
      </header>
    </div>
  );
}

export default App;
