import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/media/general/autologo.png";
import Cookie from "js-cookie";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class MobileNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      fullName: "",
      redirect: null,
    };
  }

  render() {
    return (
      <div data-off-canvas="mobile-slidebar left overlay">
        <a className="navbar-brand scroll" href="home.html">
          <img className="scroll-logo logoImg" src={Logo} alt="logo" />
        </a>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="home.html">
              Pocetna<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Kupi</Link>
            <ul>
              <li>
                <Link className="dropdown-item" to="inventory-list.html">
                  Auta
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about.html">
              Novosti
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              O nama
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contacts.html">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
