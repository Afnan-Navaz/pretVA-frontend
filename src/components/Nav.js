import React from 'react';
import pretvalogo from './pretva.png';

function Nav(){
    return(
        <nav className="navbar navbar-light py-2">
            <div className="navbar-brand" >
                <img src={pretvalogo} height="55" className="d-inline-block align-top" alt="" />
            </div>
            <ul className="d-flex pt-3">
                <li className="nav-item mr-5">
                    <p className="nav-link small mb-0">About</p>
                </li>
                <li className="nav-item mr-5">
                    <p className="nav-link small mb-0">Service</p>
                </li>
                <li className="nav-item mr-5 active">
                    <p className="nav-link small mb-0">Search</p>
                </li>
                <li className="nav-item mr-5">
                    <p className="nav-link small mb-0">Feedback & Support</p>
                </li>
            </ul>
            <form className="form-inline">
                <button className="btn btn-sm btn-outline-secondary mx-2" type="button">My account</button>
                <button className="btn btn-sm btn-secondary" type="button">Log out</button>
            </form>
        </nav>
    );
}

export default Nav;