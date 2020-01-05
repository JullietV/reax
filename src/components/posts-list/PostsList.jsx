import React, {useState, useEffect} from 'react';
import './PostsList.css';

import {useDispatch, useSelector} from 'react-redux';
import {MDBIcon} from 'mdbreact';

import Table from '../../components/table/Table';

import {asyncDeletePostCreator, setPostToEdit} from '../../store/modules/posts/actions';

/**
 * PostsList
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const PostsList = (props) => {
    const dispatch = useDispatch()

    const handleDelete = (child) => {
        console.log('id to delete', child.id)
        dispatch(asyncDeletePostCreator(child.id))
    }

    const handleEdit = (child) => {
        console.log('id to edit', child)
        dispatch(setPostToEdit(child))
    }

    return (
        <div className="reax-admin-wrapper-posts">
            <h3>Posts creados</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta ducimus quaerat? 
                Obcaecati, ullam delectus omnis quisquam vel cum dolor? Molestiae laudantium esse delectus mollitia velit modi sequi adipisci quos!</p>
            <Table 
            headers={['ID', 'Título', 'Descripción', 'Imagen']} 
            rows={props.posts} 
            actions 
            onDeleteClick={handleDelete} 
            onEditClick={handleEdit} />
        </div>
    );
};

export default PostsList;