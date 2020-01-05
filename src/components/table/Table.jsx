import React, { Children } from 'react';
import './Table.scss';

import Avatar from '../avatar/Avatar';
import {MDBIcon} from 'mdbreact';

/**
 * Admin
 * @version v1.0.0
 * 
 * @param {*} props 
 */

 const Admin = (props) => {
     return (
         <table className="reax-table">
             <thead>
                 <tr>
                    {props.headers.map(header => <td key={header}>{header}</td> )}
                    {props.actions ? <td>Acciones</td> : null}
                 </tr>
             </thead>
             <tbody>
                 {props.rows.map(row => {
                     return (
                        <tr key={`row-${row.id}`}>
                            {Object.keys(row).map(item => {
                                if (item.includes('image')) {
                                    return (
                                        <td key={`image-${row.id}`}><Avatar url= {row[item] ? row[item] : 'https://via.placeholder.com/50x50?text=1200x300'}/></td>
                                        )
                                } else {
                                    return (
                                        <td key={`${item}-${row.id}`}>{row[item] ? row[item] : 'Sin definir'}</td>
                                        )
                                }
                            })}
                            { props.actions 
                              ? <td key={`actions-${row.id}`} className="reax-table-actions-td">
                                    <a href="#" onClick={() => props.onEditClick(row)}><MDBIcon icon="pencil-alt" /></a>
                                    <a href="#" onClick={() => props.onDeleteClick(row)}><MDBIcon icon="trash-alt" /></a>
                                </td>
                              : null
                            }
                        </tr>
                     )
                 })}
             </tbody>
         </table>
     );
 };

 export default Admin;