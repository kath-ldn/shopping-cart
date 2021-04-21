import React from "react";
import{ BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import './Components/reset.css';
import './Components/App.css';
import Items from "./Components/Items";
import Item from "./Components/Item";
import Checkout from "./Components/Checkout";
import Nav from "./Components/Nav";

const Routes = () => {
    return(
        <BrowserRouter>
        <div className="App"></div>
        <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Items" component={Items} />
                <Route exact path="/Cart" component={Checkout} />
                <Route exact path="/Items/:id" component={Item} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;