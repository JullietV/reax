import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './About.scss';
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
        <div className="reax-about">
            <Container>
                <Navbar></Navbar>
                <div className="reax-about-wrapper">
                    <Row>
                        <Col>
                            <Post
                                title="Acerca de"
                                timeToRead="2 min."
                                date="04 ene 2019"
                                image_url="https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                expanded
                                >
                                    <p>Este proyecto nació porque inicié un curso muy entretenido de React. En el transcurso, se me ocurrieron mil ideas distintas para desarrollar, actualmente tengo un par en mente en las que aún tengo que desarrollar.</p>
                                    <p>Por ahora y en la versión más alpha de este proyecto, quiero agradecer al profesor  <a href="https://github.com/docentedev">Claudio</a>, que se pasó, que es super bueno y me enseñó un montón.
                                    <p>Me gustaria agradecer también a la academia <a href="https://desafiolatam.com/">Desafío Latam</a>, por darnos la bienvenida y tener un montón de buenas intenciones.</p>
                                    <p>También, a <a href="https://talana.com/es/">Talana</a>, por apoyarme desde el inicio.</p>
                                    <p>¡Gracias!</p>
                                    </p>
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