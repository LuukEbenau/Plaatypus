import React from 'react'
import {Link} from "react-router-dom"
import '../styles/header.scss'

import logo from '../images/logo.png'

export default function Header() {
    return (
    <div className="header">
        <nav>
            <div className="logo-wrap">
                <Link to="/"><img className="logo" src={logo}/></Link>
            </div>
            <ul>
                <li><Link to="/Plaatypus">Home</Link></li>
                <li><Link to="/Plaatypus/products">Our Products</Link></li>
                <li><Link to="/Plaatypus/about">About Us</Link></li>
                <li><Link to="/Plaatypus/contact">Contact</Link></li>
            </ul>
            <div className="search">
            </div>
        </nav>
    </div>
    )
}
