import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Blog.scss';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Post from '../../components/post/Post';

import {asyncGetAllPostsCreator} from '../../store/modules/posts/actions';
import Loader from '../../components/loader/Loader';

/**
 * Blog
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const Blog = (props) => {
    const dispatch = useDispatch()
    const posts = useSelector(store => store.posts)

    useEffect(() => {
        if (!posts.length) dispatch(asyncGetAllPostsCreator());
    }, [props.parentProps])

    return (
        <div className="reax-blog">
            <Container>
                <Navbar></Navbar>
                <div className="reax-blog-wrapper">
                    <Row>
                        <Col>
                            {
                                posts.loading ? <Loader /> : posts.posts.length ? posts.posts.map(post => {
                                    return (
                                        <Post
                                            title={post.title}
                                            timeToRead="2 min."
                                            date="12 nov 2019"
                                            image_url={post.image_url}
                                            >
                                                <p>{post.description}</p>
                                            </Post>
                                    )
                                })
                                :
                                <h2>Aún no tenemos posts, po washo</h2>
                            }
                        </Col>
                    </Row>
                </div>
                <Footer />
            </Container>
        </div>
    );
};

export default Blog;