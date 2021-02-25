import logo from './logo.svg';
import './App.css';
import Resume from './Resume/Resume.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Under Construction
        </p>
      </header>
      <img src="Boston2020.jpg" alt="profile" width="2016" height="1512"/>
      <Resume/>
    </div>
  );
}

export default App;
