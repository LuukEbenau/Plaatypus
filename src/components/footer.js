import React from 'react'
import '../styles/footer.scss'
import insta from "../images/insta.png"
export default function Footer() {
    return (
        <div className="footer">
            <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">copyright Plaatypus @2020</a></p>
            <div className="social">
                <a href="https://www.instagram.com/demosjc_i.o._6"><img className="fa fa-instagram" src={insta} alt="instagram"/></a>
            </div>
        </div>
    )
}