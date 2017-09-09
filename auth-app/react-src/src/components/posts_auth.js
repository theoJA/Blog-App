import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jotLogo from "../images/jot-transparent.png"
import "./posts_auth.css"

class posts_auth extends Component {
  render() {
    return (
      <div className="container absoluteCenter">
        <div>
          <img src={jotLogo} />
          <h4>Write your thoughts down, anywhere, anytime.</h4>
          <h6>Everything is centered now! YESSS!</h6>
        </div>
      </div>
    )
  }
}

export default posts_auth