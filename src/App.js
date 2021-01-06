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
import HttpsRedirect from 'react-https-redirect';

function App() {
  return (
    <HttpsRedirect>
        <Router>
          <Header />
          <div style={{minHeight:'90vh'}} className="container">
            <Route path="/products" component={Products} />
            <Route path="/product/:id" component={Product} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/" component={MainContent} />
          </div>
          <Footer />
        </Router>
    </HttpsRedirect>
  );
}

export default App;

