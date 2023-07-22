import { Link } from 'react-router-dom';
import './css/navbar.css'
import { useLocation } from 'react-router-dom';
import React from 'react'


export default function Navbar() {
    const location = useLocation().pathname;
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark`} id="nav">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">Camera</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className={`nav-link ${location === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className={`nav-link ${location === "/About" ? "active" : ""}`} to="/About">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className={`nav-link ${location === "/Contact" ? "active" : ""}`} to='/Contact'>Contact</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className={`nav-link ${location === "/Works" ? "active" : ""}`} to='/Works'>Work</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}
