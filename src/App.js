import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/landing/Landing";
import Contact from "./components/contact/Contact";
import { PhotoGallery } from "./components/gallery/PhotoGallery";
import { Orders } from "./components/orders/Orders";
import { Modernization } from "./components/modernization/Modernization";
import { Footer } from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/modernization" component={Modernization} />
          <Route exact path="/gallery" component={PhotoGallery} />
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
