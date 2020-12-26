import React from 'react'
import {Link} from "react-router-dom"
import '../styles/header.scss'

import logo from '../images/logo.png'

export default function Header() {
    return (
    <div className="header">
        <nav>
            <div className="logo-wrap">
                <img className="logo" src={logo}></img>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Our Products</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="search">
            </div>
        </nav>
    </div>
    )
}
