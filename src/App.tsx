import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Footer } from "./footer/Footer";
import { Home } from "./home/Home";
import { Navbar } from "./Navbar";
import { Product } from "./product/Product";
import { Service } from "./service/Service";
import { SignUp } from "./signup/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/react-responsive" exact component={Home} />
        <Route path="/react-responsive/service" component={Service} />
        <Route path="/react-responsive/product" component={Product} />
        <Route path="/react-responsive/signup" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
