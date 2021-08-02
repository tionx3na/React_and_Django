import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Temp from './components/temp';

function App() {
  return (
    <div className="App">
      <h1>Hello World! </h1>
      <Hello/>
      <Temp/>
    </div>
  );
}

export default App;
