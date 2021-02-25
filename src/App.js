import logo from './logo.svg';
import profile from './Boston2020.svg';
import './App.css';
import Resume from './Resume/Resume.js';

function App() {
  return (
    <div className="App">
      <Resume/>
      <img src={profile} alt="profile" width="1008" height="756"/>
    </div>
  );
}

export default App;
