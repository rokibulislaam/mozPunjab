import React, { Fragment } from "react"
import mozLogo from "../assets/logo.png"
import "../styles/headerStyles.scss"
export default function Header() {
  return (
    <header>
      <div id="topBackground">
        <img className="mozLogo" src={mozLogo}  alt="mozilla Punjab logo"/>
        <nav className="navigation">
          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Team</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
