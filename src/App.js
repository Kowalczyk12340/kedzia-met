import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/landing/Landing";
import { Contact } from "./components/contact/Contact";
import { Gallery } from "./components/gallery/Gallery";
import { Orders } from "./components/orders/Orders";
import { Modernization } from "./components/modernization/Modernization";
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
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
