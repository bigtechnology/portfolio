import React from "react";
import {Link,Switch, Route} from "react-router-dom";
import NavContent from "./navContent";
import Home from "../home_content/homeContent";
import About from "../about_me/about";
import Testimonial from "../tetimonials/testimonial";
import Services from "../services_/services";


function Nav() {
    return (
        <>
        <NavContent/>
        <Link to="/home" />
        <Link to="/about" />
        <Link to="/testimonials" />
        <Link to="/services" />

        <Switch>
        <Route path="/home" > 
        <Home/>
        </Route>

        <Route path="/about" > 
        <About/>
        </Route>

        <Route path="/testimonials" > 
        <Testimonial/>
        </Route>

        <Route path="/services" > 
        <Services/>
        </Route>


        </Switch>
        </>
    )
}

export default Nav;