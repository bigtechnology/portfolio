import React from "react";
import "./App.css";

// COMPONENTS \\
import About from "./components/about_me/about";
import Footer from "./components/footer/footer";
import NewNav from "./components/newNav/newNav";

function App() {
  return (
    <div className="App">
      <NewNav />
      <About />
      <Footer />
    </div>
  );
}

export default App;
