import React from "react";
import { Component } from "react";
import logo from "../images/leechiu-logo.png";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }

  handleToggle = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  };


  render() {
    return (
      <div>
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <img src={logo} alt="Leechiu Logo" />
                </div>
                <nav className={
        
                  this.state.isToggleOn ? "nav-menu" : "nav-menu active"
                }>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Our Services</a></li>
                        <li><a href="">Office Spaces for Lease</a></li>
                        <li><a href="">Properties for Sale</a></li>
                        <li><a href="">Schedule an Appointment</a></li>
                    </ul>
                </nav>
                <button className="mobile" onClick={this.handleToggle}><i class="fa-solid fa-bars"></i></button>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;