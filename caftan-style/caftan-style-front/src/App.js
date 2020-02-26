import React from 'react';
//import Aside from "./Aside";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Catalogue from './components/catalogue/Catalogue';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';

function App() {
  
  return (
    <div>
      <Router>
                
                <Switch>
                    <Route path="/Catalogue">
                        <Catalogue />
                    </Route>
                    <Route path="/Header">
                        <Header />
                    </Route>
                    <Route path="/NavBar">
                        <NavBar />
                    </Route>
                    <Route path="/Footer">
                        <Footer />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
    </div>
  );
}

export default App;
