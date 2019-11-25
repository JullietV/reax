import React from 'react';
import './Comment.scss';

import Avatar from '../avatar/Avatar';

/**
 * Comment
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const Comment = (props) => {

    return (
        <div className="reax-comment">
            <Avatar url={props.avatar} />
            <div className="reax-comment-dialog">
                <div className="reax-comment-dialog-header">
                   <h5>{props.name}</h5>
                </div>
                <div className="reax-comment-dialog-body">
                    {props.children}
                </div>
                <div className="reax-comment-dialog-footer">
                    {props.date}
                </div>
            </div>
        </div>
    );
};

export default Comment;