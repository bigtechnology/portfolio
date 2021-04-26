import React from "react";
import {Route, Switch} from 'react-router';

// COMPONENTS \\
import { Footer, Header, Projects } from "./components/common";
import { ContactPage } from "./components/pages";
import { LandingPage } from "./components/pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/contact" component={ContactPage} />
      {/* <Route exact path="/projects" component={Projects} /> */}
    </Switch>
    <Footer />
  </div>
  );
}

export default App;
