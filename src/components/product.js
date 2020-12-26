import React from "react"
import product_card from "../data/product_data";

export default class Product extends React.Component {
    constructor(props) {
        super(props)
        this.item = product_card[props.match.params.id]
    }

    render() {
        return (
            <div>{this.item.product_name}</div>
        )
    }
}