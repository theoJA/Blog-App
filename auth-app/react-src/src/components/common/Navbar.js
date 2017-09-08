import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/posts">{props.navbarTitle}</Link>
        </div>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/posts">Dashboard</Link></li>
            <li><Link to="#">Profile</Link></li>
            <li><Link to="#">Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export {Navbar}