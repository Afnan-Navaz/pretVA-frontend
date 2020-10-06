import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer className="font-small mt-5">
            <div className="py-3 d-flex justify-content-center">
                <h6>Contact Us: </h6>
                <FontAwesomeIcon className="ml-4 pointer" icon={faFacebook} />
                <FontAwesomeIcon className="ml-4 pointer" icon={faInstagram} />
                <FontAwesomeIcon className="ml-4 pointer" icon={faLinkedin} />
            </div>
        </footer>
    );
}

export default Footer;