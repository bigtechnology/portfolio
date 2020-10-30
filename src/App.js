import React from 'react';
import './App.css';
// COMPONENTS \\
import About from "./components/about_me/about";
import { BrowserRouter as Router } from 'react-router-dom';
import NewNav from './components/newNav/newNav';
// import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NewNav />
      </Router> 
      <About />
    </div>
  );
}

export default App;
