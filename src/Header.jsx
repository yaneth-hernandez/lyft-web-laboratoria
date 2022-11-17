import React from "react";
import logo from "../assets/logo-white.png"

export const Header = () => {
    return(
    <header className="header_container">
        <figure className="header_logo_container">
            <img src={logo} className="header_logo"/>
        </figure>
        <nav className="header_nav_bar">
            <button className="header_nav_bar_item">Drive</button>
            <button className="header_nav_bar_item">Explore</button>
            <button className="header_nav_bar_item">Help</button>
            <button className="header_nav_bar_item">Login</button>
        </nav>
    </header>
    )
}