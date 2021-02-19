import React from 'react'
import "./Banner.css"
import Button from "./Buttons"

function Banner() {
    return (
        <div className="banner">
            <div className="banner__question">
                <h1>Do you always wonder how did the Universe was created?</h1>
            </div>
            <div className="banner__message">
                <h2>(Click the buttons below to see different answers)</h2>
            </div>
            <Button>Test Button</Button>
        </div >
    )
}

export default Banner;
