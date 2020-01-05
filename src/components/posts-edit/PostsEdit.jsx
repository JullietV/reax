import React, {useState, useEffect} from 'react';
import './PostsEdit.css';

import Input from '../../components/Input/Input';
import Textarea from '../../components/textarea/Textarea';
import Button from '../../components/Button/Button';

import {useDispatch, useSelector} from 'react-redux';
import {asyncCreatePostCreator} from '../../store/modules/posts/actions';

/**
 * PostsEdit
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const PostsEdit = (props) => {
    const [inputs, setInputs] = useState({})
    const postToEdit = useSelector(store => store.posts.postToEdit)
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {...inputs}

        dispatch(asyncCreatePostCreator(data))
    }

    useEffect(() => {
        if (postToEdit) {
            setInputs(postToEdit)
        }
    }, [postToEdit])

    return (
        <div className="reax-admin-wrapper-posts-edit">
            <h3>Crea o edita tus posts</h3>
            <p>En esta versión super beta solo tienes que preocuparte por escribir, el estilo lo ponemos nosotros :D</p>
            <Input
                name="title"
                value={inputs.title}
                onInputChange={handleInputChange}
                placeholder="Escribe aquí un título sensual para tu post"
             />
            <Textarea
                name="description"
                value={inputs.description}
                onInputChange={handleInputChange}
                placeholder="Y un cuerpo bien interesante"
             />
             <Input 
                name="image_url"
                value={inputs.image_url}
                onInputChange={handleInputChange}
                placeholder="Link de imagen (opcional)"
             />

            <Button onButtonClick={handleSubmit} text="Publicar"/>
        </div>
    );
};

export default PostsEdit;