import React from 'react';
import './App.css';
// COMPONENTS \\
import Nav from "./components/nav_bar/Nav";
import About from "./components/about_me/about";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
    <Nav />
    <About />
    <Footer />
    </div>
  );
}

export default App;
