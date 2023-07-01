import { useState } from "react";
import React from 'react';
import $ from 'jquery';

export default function Navbar(){
    const [navbar, setNavbar] = useState(false)
    const [navSpan, setNavSpan] = useState(false)
    const [menu, setMenu] = useState(false)
    const [showList, setShowList] = useState(false)

    $("button.menu-toggle").on("click", () => {
        setShowList(!showList)
    })

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
            setNavSpan(true)
            setMenu(true)
        } else {
            setNavbar(false)
            setNavSpan(false)
            setMenu(false)
        }
      });
      
    return (
        <nav className={navbar ? "active_nav nav-child" : "nav-child"}>
            <h3 className="navbarChild-title">F<span className={navSpan ? "active_span" : ""}>OO</span>DIES</h3>
            <a className="navbarChild-home" href="/">Home</a>
      </nav>
    )
}