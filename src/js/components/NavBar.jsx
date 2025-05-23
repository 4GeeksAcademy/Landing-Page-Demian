import React from 'react';

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.btnleft}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
  
          </ul>
          <ul className="navbar-nav">
        
            <li className="nav-item">
              <a className="nav-link" href="#">{props.btnr1}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{props.btnr2}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{props.btnr3}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;