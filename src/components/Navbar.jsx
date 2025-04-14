import React from 'react'
import Logo from '../assets/images/Logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className='pt-4'>
        <nav className='navbar navbar-dark navbar-expand-xl'>
          <div className='container-fluid'>
            <a className='navbar-brand d-flex' href='#' id='Logo'>
              <img src={Logo} alt="Logo" className='logo img-fluid mt-2'/>
              <Link className="title nav-link m-0 ms-2" to="/">DocKing</Link>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className='navbar-nav ms-auto fs-4' style={{marginRight:'10%'}}>
                <li className='nav-item'><Link className="nav-link" to="/">Home</Link></li>
                <li className='nav-item'><Link className="nav-link" to="/downloads">Downloads</Link></li>
                <li className='nav-item'><Link className="nav-link" to="/usermanual">User Manual</Link></li>
                <li className='nav-item'><Link className="nav-link" to="/faq">FAQ</Link></li>
                <li className='nav-item'><Link className="nav-link" to="/contact">Contact Us</Link></li>
                <li className='nav-item'><Link className="nav-link" to="/aboutme">Developer's Corner</Link></li>     
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar