import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent'
import Hooks from './components/Hooks';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FirstComponent/>
        <hr/>
        <Hooks/>
      </header>


    </div>
  );
}

export default App;
