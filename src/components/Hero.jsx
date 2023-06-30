import React from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"

export default function Hero(){
    const [text] = useTypewriter({
        words: ["Foods", "Meals"],
        loop: {}
    })

    return (
        <header id="home">
            <div className="header-main">
                <h1 className="header-title">Make <span>{text}</span><Cursor/></h1>
                <h1 className="header-title">With Us</h1>
                <a href="#foods"><button className="header-button">View More</button></a>
            </div>
            <img src="./assets/background.png" alt="" className="background"/>
        </header>
    )
}