import React from 'react';
import './Footer.scss';

import Credits from '../Credits/Credits';

/**
 * Footer
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const Footer = (props) => {

    return (
        <div className="reax-footer">
            <Credits />
            <p>Reax · 2019</p>
        </div>
    );
};

export default Footer;