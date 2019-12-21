import React from 'react';
import './Button.scss'

const Button = (props) => {
    // emitir evento de click en el boton
    return (
        <button onClick={props.onButtonClick} className="reax-btn">
            {props.text}
        </button>
    );
}

export default Button;