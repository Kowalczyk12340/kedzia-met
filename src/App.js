import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/landing/Landing";
import { Contact } from "./components/contact/Contact";
import { PhotoGallery } from "./components/gallery/PhotoGallery";
import { Orders } from "./components/orders/Orders";
import { Offers } from "./components/Offers/Offers";
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
          <Route exact path="/offers" component={Offers} />
          <Route exact path="/modernization" component={Modernization} />
          <Route exact path="/gallery" component={PhotoGallery} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
