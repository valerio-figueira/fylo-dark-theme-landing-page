import React from 'react'

import Logo from '../assets/logo.svg';

function Header() {
  return (
        <header>
            <a href="./index.html">
                <img src={Logo} alt="The title Fylo of the Web Site" />
            </a>
            <nav class="navbar">
                <a href="#Features">Features</a>
                <a href="#Team">Team</a>
                <a href="#SignIn">Sign In</a>
            </nav>
        </header>
  )
}

export default Header