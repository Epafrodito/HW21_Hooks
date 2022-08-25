import "./App.css";
import { Phonebook } from "./components/phonebook/Phonebook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="info">HW#21</p>
        <p className="info">ReactJS. Хуки</p>
        <Phonebook></Phonebook>
      </header>
    </div>
  );
}

export default App;
