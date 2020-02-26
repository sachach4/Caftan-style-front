import React from "react";
import Caftan from "../components/catalogue/Caftan"
import Babouche from "../components/catalogue/Babouche"
import Djellaba from "../components/catalogue/Djellaba"
import Home from "../components/home/Home"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Acceuil</Link>
                        </li>
                        <li>
                            <Link to="/Caftan">Caftan</Link>
                        </li>
                        <li>
                            <Link to="/Djellaba">Djellaba</Link>
                        </li>
                        <li>
                            <Link to="/Babouche">Babouche</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/Caftan">
                        <Caftan />
                    </Route>
                    <Route path="/Djellaba">
                        <Djellaba />
                    </Route>
                    <Route path="/Babouche">
                        <Babouche />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}



