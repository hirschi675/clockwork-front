import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Timer from './components/Timer';
import Projects from './components/Projects';
import Team from './components/Team';
import Reports from './components/Reports';
import Settings from './components/Settings';
import './App.css';
import TimerDetails from './components/details/TimerDetails';

function App() {
  const [activeId, setActiveId] = useState("Dashboard")
  const [rotate, rotateState] = useState(true)
  var timer = <TimerDetails />
  const rotateArrow = () => {
    rotateState(!rotate)
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-main">
        <Sidebar rotate={rotate} activeId={activeId} rotateArrow={rotateArrow} setActiveId={setActiveId}/>
        <Dashboard activeId={activeId} rotate={rotate} TimerDetails={timer}   />
        <Timer activeId={activeId} rotate={rotate} TimerDetails={timer} />
        <Projects activeId={activeId} rotate={rotate} />
        <Team activeId={activeId} rotate={rotate}/>
        <Reports activeId={activeId} rotate={rotate} />
        <Settings activeId={activeId} rotate={rotate}/>
      </div>
    </div>
  );
}

export default App;
