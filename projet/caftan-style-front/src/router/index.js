import React from "react";
//import { Button } from 'reactstrap';
import Acceuil from "../components/catalogue/Acceuil";
import Caftan from "../components/catalogue/Caftan";
import Babouche from "../components/catalogue/Babouche";
import Djellaba from "../components/catalogue/Djellaba";
import DetailArticle from "../components/catalogue/DetailArticle";
//import Header from "../components/header/Header";
//import Home from "../components/home/Home";
//import logo from "../ass";
import "./menu.css";
import Footer from "../components/footer/Footer"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <div className="header-menu">
        <img src="/assets/logo.png" />
        <div className="menu">
          <nav>
          {/* <Link to="/Header">s identifier</Link> */}
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
            <Route path="/:id">
              <DetailArticle />
            </Route>
            {/* <Route path="Header">
              <Header/> 
            </Route>*/}
            <Route path="/">
              <Acceuil />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
