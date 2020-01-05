import React, {Component} from 'react';
import './Post.scss';

import Avatar from '../avatar/Avatar';
import Comment from '../comment/Comment';
import Button from '../Button/Button';

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
            expanded: false
        }
    }

    handleExpansion = () => {
        this.setState((state) => ({ expanded: !state.expanded}))
    }

    componentDidMount () {
        if (this.props.expanded) {
            this.setState((state) => ({expanded: this.props.expanded}))
        }
    }

    render () {
        return (
            <div className="reax-post">
                <div className="reax-post-header">
                    <a href="#"><h2>{this.props.title}</h2></a>
                    <p> {this.props.date} · Léelo en: {this.props.timeToRead}</p>
                </div>
                {
                    this.state.expanded ? <div className="reax-post-body"> {this.props.children}</div> : null
                }
                {this.props.image_url ? <div className="full-width reax-post-thumbnail" style={{backgroundImage: `url(${this.props.image_url})`}} alt={this.props.title}></div> : null}
                <div className="reax-post-footer">
                    <Button onButtonClick={this.handleExpansion} text={this.state.expanded ? 'Resumir' : 'Expandir'} />
                </div>
                {/* 
                Los comentarios los vamos a guardar para una versión más avanzada
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
                </div> */}
            </div>
        )
    };
}

export default Post;