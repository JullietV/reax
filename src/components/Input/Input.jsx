import React from 'react'
import './Input.scss'

const Input = (props) => {
    return (
        <input 
        className="reax-input"
        name={props.name} 
        value={props.value} 
        type={props.type}
        disabled={props.disabled}
        onChange={props.onInputChange}
        placeholder={props.placeholder}/>
    );
}

export default Input;