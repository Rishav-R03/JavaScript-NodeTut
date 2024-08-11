import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from '../src/Home/Home';
import AboutMe from '../src/AboutMe/AboutMe';
import Education from '../src/Education/Education';
import Projects from '../src/Projects/Projects';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Projects'>Projects</Link>
            </li>
            <li>
              <Link to='/AboutMe'>AboutMe</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/Projects" element = {<Projects/>} />
          <Route path="/AboutMe" element = {<AboutMe/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
