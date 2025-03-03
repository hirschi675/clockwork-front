import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [rotate, rotateState] = useState(true)
  const rotateArrow = () => {
    rotateState(!rotate)
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-main">
        <Sidebar rotate={rotate} rotateArrow={rotateArrow}/>
        <Dashboard rotate={rotate}  />
      </div>
    </div>
  );
}

export default App;
