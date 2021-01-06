import React from 'react'
import {Link} from "react-router-dom"
import product_card from "../data/product_data";
import '../styles/home.scss'
import logo from "../images/logo_met_namen.png";

const MainContent = () => {
    return (
        <div className="">

            <div className="home-header">
                <h1 className="home-title">JC PLAATYPUS</h1>
                <img src={logo} width="350"></img>
            </div>
                JC 1 blijft alleen!<br/>
                JC 2 zijn prostituees!<br/>
                JC 3 needs therapie! <br/>
                JC 4 geen plezier! <br/>
                JC 5 neem een schijf! <br/>
                JC 6 staat voor succes! <br/>
                JC 7 jullie moeten overgeven!<br/><br/><br/>
        </div>

        
    )
}
export default MainContent;
