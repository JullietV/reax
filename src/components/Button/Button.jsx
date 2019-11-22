import React from 'react';
import './Button.scss'

const Button = (props) => {
    return (
        <button className="reax-btn">
            {props.text}
        </button>
    );
}

export default Button;