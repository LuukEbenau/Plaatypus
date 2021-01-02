import React from "react"
import { Redirect } from "react-router"

export default class Contact extends React.Component {
    render() {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1'
        return (
            <Redirect to="https://youtu.be/ub82Xb1C8os"></Redirect>
        )
    }
}