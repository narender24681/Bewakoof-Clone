import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "./Navbar.css";

export default function Navbar() {
    return (
        <div id="navbar-main-container">
            <div id="navbar-container">
                <div id="navbar-logo-links">
                    <div id="navbar-logo">
                        <img src="/icon1.jpg" alt="" />
                    </div>
                    <div id="navbar-links1">
                        <p>MEN</p>
                        <p>WOMEN</p>
                        <p>ACCESSORIES</p>
                    </div>
                </div>
                <div id="navbar-search-links">
                    <div id="navbar-search">
                        <input type="text" placeholder='Search by product' />
                    </div>
                    <div id="navbar-links2">
                        <p>Login</p>
                        <p>Bag</p>
                        <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
