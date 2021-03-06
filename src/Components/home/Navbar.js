import React, { Component } from 'react';

// Assets
import logo from '../../images/mi-sazon.png'
import './Navbar.css';


class Navbar extends Component {
  

    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-style">
            <a className="navbar-brand" >
            <img src={logo} width="74px" alt="logo-mi-sazon" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <div className="btn-group">
                            <button id="userHome" type="button" className="btn btn-dark" href="view1.html" >Home <span class="sr-only">(current)</span></button>
                            <button id="userProfile" type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter">Mi Perfil</button>
                            <button id="userExit" type="button" className="btn btn-dark" >Salir</button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}
  export default Navbar;