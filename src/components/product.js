import React from "react"
import { Switch } from "react-router-dom";
import product_card from "../data/product_data";

import Frederik from './persons/frederik'
import Fellie from './persons/fellie'
import Merijn from './persons/merijn'
import Christine from './persons/christine'
import Dave from './persons/dave'
import Joni from './persons/joni'
import Fabian from './persons/fabian'
import Pascal from './persons/pascal'
import Vivan from './persons/vivan'
import Ember from './persons/ember'
import Joep from './persons/joep'
import Sietze from './persons/sietze'
import Amadeus from './persons/amadeus'

export default class Product extends React.Component {
    constructor(props) {
        super(props)
        this.item = product_card[props.match.params.id]
    }

    render() {
        let id = this.item.id
        let PersonInfoPage = 
        id === 0 ? Frederik : 
        id === 1 ? Fellie : 
        id === 2 ? Fabian : 
        id === 3 ? Pascal : 
        id === 4 ? Vivan : 
        id === 5 ? Merijn : 
        id === 6 ? Dave : 
        id === 7 ? Amadeus : 
        id === 8 ? Joep : 
        id === 9 ? Ember : 
        id === 10 ? Christine : 
        id === 11 ? Sietze :
        id === 12 ? Joni : <div>Onbekend jaarclub lid?</div>
        return (
            <div>
                <h1>{this.item.product_name}</h1>
                <PersonInfoPage></PersonInfoPage>
            </div>
        )
    }
}