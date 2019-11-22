import React, {useState} from 'react';
import './Login.scss'

import Input from '../Input/Input'
import Button from '../Button/Button'

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    
    const handleUserChange = (event) => {
        event.persist();
        setUser(event.target.value);
    };

    const handlePasswordChange = (event) => {
        event.persist();
        setPassword(event.target.value);
    };

    return (
        <div className="reax-login">
            <h1>Inicia sesión</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur aliquam perferendis, vitae neque quia enim facere accusamus, 
            numquam est voluptate voluptatibus dolores sed officiis, beatae a asperiores unde debitis quas.</p>
            <Input 
            placeholder="Usuario" 
            value={user} 
            type="text"
            onInputChange={handleUserChange}></Input>
            <Input
            placeholder="Contraseña"
            value={password} 
            type="password"
            onInputChange={handlePasswordChange}
            ></Input>
            <Button text="Iniciar sesión"></Button>
        </div>
    );
}

export default Login;

