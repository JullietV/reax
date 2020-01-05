import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Admin.scss';

import {Container} from 'reactstrap';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Button from '../../components/Button/Button';
import PostsList from '../../components/posts-list/PostsList';
import PostsEdit from '../../components/posts-edit/PostsEdit';

import {logoutActionCreator} from '../../store/modules/auth/actions';
import {asyncGetAllPostsCreator, setPostToEdit} from '../../store/modules/posts/actions';
import Loader from '../../components/loader/Loader';

/**
 * Admin
 * @version v1.0.0
 * 
 * @param {*} props 
 */

 const Admin = (props) => {
    const dispatch = useDispatch()
    const isLogin = useSelector(store => store.auth.isLogin)
    const postToEdit = useSelector(store => store.posts.postToEdit)
    const posts = useSelector(store => store.posts)
    const [editorIsActive, setEditorIsActive] = useState(false);


    const handleLogout = () => {
        return (event) => {
            dispatch(logoutActionCreator())
        }
    }

    const handleEdit = () => {
        return (event) => {
            setEditorIsActive(!editorIsActive)

            if (!editorIsActive) dispatch(setPostToEdit(null))
        }
    }

    useEffect(() => {
        if (postToEdit) {
            setEditorIsActive(true)
        } else {
            setEditorIsActive(false)
        }
    }, [postToEdit])

    useEffect(() => {
        dispatch(asyncGetAllPostsCreator());
        if (!isLogin) {
            props.history.push('/login');
        }
    }, [isLogin, props.parentProps])

     return (
         <div className="reax-admin">
             <Container>
                <Navbar />
                <div className="reax-admin-wrapper">
                    <div className="reax-admin-wrapper-title">
                        <h2>Admin</h2>
                        <ul>
                            <li><a href="" onClick={handleLogout()}>Cerrar sesión</a></li>
                            <li><Button onButtonClick={handleEdit()} text={editorIsActive ? 'Volver al listado' : 'Crear nuevo post'} /></li>
                        </ul>
                    </div>
                    {
                        posts.loading ? <Loader /> : (editorIsActive ? <PostsEdit /> : <PostsList posts={posts.posts} />)
                    }
                </div>
                <Footer />
             </Container>
         </div>
     );
 };

 export default Admin;