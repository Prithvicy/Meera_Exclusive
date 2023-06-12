import React, { Component } from "react";
import "../components/Nav.css";
import logo from "../images/Meera-Logo.png";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };


  render() {
    return (
      <>
        <nav>
          <div>
            <img src={logo} />
          </div>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li className="">
                <Link className="navlink" to="/" style={{ textDecoration: 'none' , color : "black"}}>Home</Link>
              </li>
              <li>
                <Link className="navlink" to="/ProductRange" style={{ textDecoration: 'none', color : "black"}}>Product Range</Link>
              </li>
              <li>
                <Link className="navlink" to="/About" style={{ textDecoration: 'none', color : "black" }}>About</Link>
              </li>
              <li>
                <Link className="navlink" to="/ContactUs" style={{ textDecoration: 'none', color : "black" }}>Contact Us</Link>
              </li>
              <li>
                <i class="fa-regular fa-user"></i>
              </li>
              <li>
                <i class="fa-solid fa-cart-shopping"></i>
              </li>
            </ul>
          </div>
          <div className="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={
                this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"
              }
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
