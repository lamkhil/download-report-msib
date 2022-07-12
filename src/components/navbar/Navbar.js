import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark NavbarItems">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <tr>
              <td>
                <img alt="" src="a.svg" width="60" height="60" className="d-inline-block align-top" />
              </td>
              <td>
                <tr>
                  <div className="dlh-kota-batu ms-2">DLH Kota Batu</div>
                  <hr class="half-rule ms-2" />
                  <div className="subtitle-dlh ms-2">Dinas Lingkungan Hidup Kota Batu</div>
                </tr>
              </td>
            </tr>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mt-4 mb-0 nav-pills ">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/">
                  Beranda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/titik-pantau">
                  Titik Pantau
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Laporan">
                  Laporan
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.child}
    </div>
  );
};

export default Navbar;
