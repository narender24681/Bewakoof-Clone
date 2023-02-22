import React from 'react'

export default function Navbar() {
  return (
    <div id="navbar-main-container">
        <div id="navbar-container">
            <div id="navbar-logo">
                <img src="" alt="" />
            </div>
            <div id="navbar-links">
                <p>MEN</p>
                <p>WOMEN</p>
                <p>ACCESSORIES</p>
            </div>
            <div id="navbar-search-links">
                <div id="navbar-search">
                    <input type="text" placeholder='Search by product' />
                </div>
                <div id="navbar-links2">
                    <p>Login</p>

                </div>
            </div>
        </div>
    </div>
  )
}
