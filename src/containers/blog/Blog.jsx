import React from 'react';
import './Blog.scss';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Post from '../../components/post/Post';

/**
 * Blog
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const Blog = (props) => {

    return (
        <div className="reax-blog">
            <Container>
                <Navbar></Navbar>
                <div className="reax-blog-wrapper">
                    <Row>
                        <Col>
                            <Post
                            title="Lorem ipsum dolor sit amet consectetur"
                            timeToRead="2 min."
                            date="12 nov 2019"
                            >
                                <img 
                                className="left-align" 
                                width="400"
                                src="https://images.pexels.com/photos/1391421/pexels-photo-1391421.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Cupiditate assumenda nam ea facere quam numquam iusto quibusdam 
                                obcaecati officiis. Beatae provident rem quisquam dolores quasi ex 
                                aspernatur quos quidem facilis?
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Cupiditate assumenda nam ea facere quam numquam iusto quibusdam 
                                obcaecati officiis. Beatae provident rem quisquam dolores quasi ex 
                                aspernatur quos quidem facilis?
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Cupiditate assumenda nam ea facere quam numquam iusto quibusdam 
                                obcaecati officiis. Beatae provident rem quisquam dolores quasi ex 
                                aspernatur quos quidem facilis?
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Cupiditate assumenda nam ea facere quam numquam iusto quibusdam 
                                obcaecati officiis. Beatae provident rem quisquam dolores quasi ex 
                                aspernatur quos quidem facilis?
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Cupiditate assumenda nam ea facere quam numquam iusto quibusdam 
                                obcaecati officiis. Beatae provident rem quisquam dolores quasi ex 
                                aspernatur quos quidem facilis?
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Cupiditate assumenda nam ea facere quam numquam iusto quibusdam 
                                obcaecati officiis. Beatae provident rem quisquam dolores quasi ex 
                                aspernatur quos quidem facilis?
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Cupiditate assumenda nam ea facere quam numquam iusto quibusdam 
                                obcaecati officiis. Beatae provident rem quisquam dolores quasi ex 
                                aspernatur quos quidem facilis?
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Cupiditate assumenda nam ea facere quam numquam iusto quibusdam 
                                obcaecati officiis. Beatae provident rem quisquam dolores quasi ex 
                                aspernatur quos quidem facilis?
                                </p>

                                <img 
                                className="full-width" 
                                src="https://images.pexels.com/photos/875862/pexels-photo-875862.png?auto=compress&cs=tinysrgb&h=750&w=1260"
                                 alt=""/>
                            </Post>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </Container>
        </div>
    );
};

export default Blog;