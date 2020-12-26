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
            <Route exact path="/" component={MainContent} />
            <Route exact path="/products" component={Products} />
            <Route path="/product/:id" component={Product} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
          <Footer />
        </Router>
    </div>
  );
}

export default App;

