import React, {useState} from 'react'
import './SignIn.scss'

import Input from '../Input/Input'
import Button from '../Button/Button'

const SignIn = () => {
    const [inputs, setInputs] = useState({})

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }


    return (
        <div className="reax-sign-in">
            <h1>Registrate</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, impedit? Adipisci voluptatem fugiat voluptatum at, necessitatibus id impedit molestiae, eius perspiciatis porro omnis magni laborum unde quidem obcaecati ad? Totam.</p>
            <Input
            type="text"
            placeholder="Usuario"
            value={inputs.user}
            name="user"
            onInputChange={handleInputChange}
            ></Input>
            <Input
            type="mail"
            placeholder="Email"
            value={inputs.email}
            name="email"
            onInputChange={handleInputChange}
            ></Input>
            <Input
            type="mail"
            placeholder="Confirmar email"
            value={inputs.confirmEmail}
            name="confirmEmail"
            onInputChange={handleInputChange}
            ></Input>
            <Input
            type="password"
            placeholder="Contraseña"
            value={inputs.password}
            name="password"
            onInputChange={handleInputChange}
            ></Input>
            <Input
            type="password"
            placeholder="Confirmar contraseña"
            value={inputs.confirmPassword}
            name="confirmPassword"
            onInputChange={handleInputChange}
            ></Input>

            <Button text="Registrate"></Button>
        </div>
    )
}

export default SignIn;