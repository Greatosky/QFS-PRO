// import logo from './logo.svg';
import {  HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Hom from './component/Home';
import Login from './component/login';
import Sign from './component/sign';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hom />}/>
          <Route path="/QFS-PRO/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
      </Routes>
    </Router>

    // <Hom />
    // <Login />
    // <Sign />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
