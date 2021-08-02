import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Temp from './components/temp';
import MyClass from './components/classcomponent';

function App() {
  return (
    <div className="App">
      <h1>Hello! </h1>
      <Hello name = "ARUN" lastname = "BABU"/>
      <Temp/>
      <MyClass email = "1runx3na@gmail.com"/>
    </div>
  );
}

export default App;
