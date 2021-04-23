import React from "react";
import {Route, Switch} from 'react-router';

// COMPONENTS \\
import { Footer, Header } from "./components/common";
import { LandingPage } from "./components/pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
    <Footer />
  </div>
  );
}

export default App;
