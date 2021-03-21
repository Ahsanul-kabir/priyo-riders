import React from 'react';
import {Button, Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <Link class="navbar-brand" to="/home">Priyo Riders</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/destination">Destination</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/blog">Blog</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/contact">Contact</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link><Button className='primary' to="/login">Login</Button></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </Col>
            </Row>
        </Container>
    );
};
export default Header;