import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <form className='formm'>
    <label>
    <input className='textt1' type="text" placeholder='Type in a city name' />
    </label>
   <input className='btn1' type="submit" value="Find Weather" />
    </form>
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          My name is Rasha Badran
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
