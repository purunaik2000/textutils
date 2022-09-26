import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';


export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">{props.head1}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">{props.head2}</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={`form-check form-switch text-${(props.mode==='light')?'dark':'light'}`}>
                        <input className='form-check-input' onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckedDefault"/>
                        <label className='form-check-label' htmlFor="flexSwitchCheckedDefault">{`${(props.mode==='dark')?'Disable':'Enable'} dark mode`}</label>
                    </div>
                </div>
            </nav>
        </>
    );
}

// Navbar.PropTypes = {
//     title: PropTypes.string.isRequired,
//     head1: PropTypes.string,
//     head2: PropTypes.string
// }

// Navbar.defaultProps = { title: "Title" }