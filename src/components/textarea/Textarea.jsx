import React from 'react'
import './Textarea.scss'

const Input = (props) => {
    return (
        <textarea 
        className="reax-textarea"
        name={props.name} 
        value={props.value} 
        type={props.type}
        disabled={props.disabled}
        onChange={props.onInputChange}
        placeholder={props.placeholder}></textarea>
    );
}

export default Input;