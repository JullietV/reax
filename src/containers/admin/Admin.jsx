import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Admin.scss';

import {Container} from 'reactstrap';

import Navbar from '../../components/navbar/Navbar';
import Table from '../../components/table/Table';

import {logoutActionCreator} from '../../store/modules/auth/actions';

/**
 * Admin
 * @version v1.0.0
 * 
 * @param {*} props 
 */

 const Admin = () => {
     const dispatch = useDispatch()

    const handleLogout = () => {
        return (event) => {
            dispatch(logoutActionCreator())
        }
    }

     return (
         <div className="reax-admin">
             <Container>
                <Navbar />
                <div className="reax-admin-wrapper">
                    <div className="reax-admin-wrapper-title">
                        <h2>Admin</h2>
                        <ul>
                            <li><a href="#" onClick={handleLogout()}>Cerrar sesión</a></li>
                        </ul>
                    </div>
                    <Table headers={[]} items={[]} />
                </div>
             </Container>
         </div>
     );
 };

 export default Admin;