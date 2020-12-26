import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <nav>
            <div className="logo">Plaatypus</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Our Products</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="search">
            </div>
        </nav>
    )
}
