import React from "react";
import {Link,Switch, Route} from "react-router-dom";
import NavContent from "./navContent";
import About from "../about_me/about";


function Nav() {
    return (
        <>
        <NavContent/>
        <Link to="/about">
        </Link>


        <Switch>

        <Route path="/about" > 
        <About/>
        </Route>

        </Switch>
        </>
    )
}

export default Nav;