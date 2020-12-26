import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Product from "./components/product";
import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer";

function App() {
  return (
    <div className="container">

      <Router>
          <Header />
          <Route exact path="/" component={MainContent} />
          <Route path="/product/:id" component={Product} />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Footer />
      </Router>

    </div>
  );
}

export default App;

