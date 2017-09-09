import React from 'react'
import { Link } from 'react-router-dom'
import jotLogo from '../../images/jot-transparent.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/posts"><img className="smallerLogo" src={jotLogo} /></Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/posts">Dashboard</Link></li>
              <li><Link to="#">Profile</Link></li>
              <li><Link to="#">Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export {Navbar}