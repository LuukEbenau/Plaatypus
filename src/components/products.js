import React from 'react'
import {Link} from "react-router-dom"
import product_card from "../data/product_data";

import '../styles/products.scss'

function getUrl(id) {return "/product/"+id}

const MainContent = () => {
    console.log(product_card);
    const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <Link to={getUrl(item.id)} className="btn">Add to cart</Link>
            </div>
        </div>
    );
    return (
        <div className="main_content">
            <div className="title-box">
                <h3 className="dirty-title">Plaatypus</h3>
            </div>
            {listItems}
        </div>
    )
}
export default MainContent;
