import React from 'react';
import './styles/app.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import MainContent from "./components/home";
import Product from "./components/product";
import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer";
import Products from './components/products';

function App() {
  return (
    <div>
        <Router>
          <Header />
          <div className="container">
            <Route exact path="/Plaatypus" component={MainContent} />
            <Route exact path="/Plaatypus/products" component={Products} />
            <Route path="/Plaatypus/product/:id" component={Product} />
            <Route path="/Plaatypus/about" component={About}/>
            <Route path="/Plaatypus/contact" component={Contact}/>
          </div>
          <Footer />
        </Router>
    </div>
  );
}

export default App;

