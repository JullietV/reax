import React, {useContext} from 'react';
import Context from '../../Context';
import './SiteConfig.scss';

import {MDBIcon} from 'mdbreact';

/**
 * SiteConfig
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const SiteConfig = (props) => {
    const ctx = useContext(Context);

    return (
        <div className="reax-site-config">
            <ul>
                <li>
                    <a onClick={ctx.toggleTheme}>
                        {ctx.data.theme === 'dark'
                        ? <MDBIcon far icon="moon" />
                        : <MDBIcon far icon="sun" />}
                        {ctx.data.theme}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SiteConfig;