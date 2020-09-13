import React from 'react';
import './App.css';
// COMPONENTS \\
import Nav from "./components/nav_bar/Nav";
import About from "./components/about_me/about";

function App() {
  return (
    <div className="App">
    <Nav />
    <About />
    </div>
  );
}

export default App;