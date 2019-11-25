import React, {Component} from 'react';
import './Post.scss';

import Avatar from '../avatar/Avatar';
import Comment from '../comment/Comment';

/**
 * Post
 * @version v1.0.0
 * 
 * @param {*} props 
 */
class Post extends Component {
    constructor (props) {
        super(props);
        this.state = {
            expanded: true
        }
    }

    render () {
        return (
            <div className="reax-post">
                <div className="reax-post-header">
                    <a href="#"><h2>{this.props.title}</h2></a>
                    <p> {this.props.date} · Léelo en: {this.props.timeToRead}</p>
                </div>
                <div className="reax-post-body">
                    {this.props.children}
                </div>
                <div className="reax-post-footer"></div>
                <div className="reax-post-comments">
                    <div className="reax-post-comments-create">
                        <textarea placeholder="Opiná po, galla!"></textarea>
                        <Avatar />
                    </div>
                    <h3>Comentarios</h3>
                    <Comment
                    avatar="https://thispersondoesnotexist.com/image"
                    name="Ma. José Otero"
                    date="13/11/2019 - 12:30pm">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui minima reiciendis deleniti nobis quae expedita quia? Magnam minus soluta porro obcaecati eligendi culpa quia, voluptates nihil optio laudantium iste corporis?</p>
                    </Comment>
                    <Comment
                    name="Anónimo"
                    date="13/11/2019 - 12:30pm">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui minima reiciendis deleniti nobis quae expedita quia? Magnam minus soluta porro obcaecati eligendi culpa quia, voluptates nihil optio laudantium iste corporis?</p>
                    </Comment>
                </div>
            </div>
        )
    };
}

export default Post;