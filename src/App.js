import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Temp from './components/temp';
import MyClass from './components/classcomponent';

function App() {
  return (
    <div className="App">
      <h1>Hello World! </h1>
      <Hello/>
      <Temp/>
      <MyClass/>
    </div>
  );
}

export default App;
