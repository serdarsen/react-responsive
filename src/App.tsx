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
        <Route path="/" exact component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/product" component={Product} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
