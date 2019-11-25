import React from 'react';
import './Avatar.scss';
import {MDBIcon} from 'mdbreact';

/**
 * Avatar
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const Avatar = (props) => {

    return (
        <div className="reax-avatar">
            {props.url 
            ? 
                <img src={props.url}></img>
            :
                <MDBIcon icon="user-secret" />
            }
        </div>
    );
};

export default Avatar;