import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" sTyle={"color:blue"} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" sTyle={"color:blue"} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link"sTyle={"color:blue"} to="/about">{props.aboutText}</Link>
        </li>
        <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
        <div className="form-check form-switch" sTyle={"color:blue;"}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
        </div>
      </ul>
    </div>
  </div>
</nav>
  )
}

Navbar.defultProps={
    title: 'TEXTUTILS',
    aboutText:'About Text here'
};