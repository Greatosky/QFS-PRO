// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Hom from './component/Home';
import Login from './component/login';
import Sign from './component/sign';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hom />}/>
          <Route Index element={<Hom />} />
          <Route path="login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        
      </Routes>
    </BrowserRouter>

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
