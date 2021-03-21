import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { vhicalListData } from '../../vhicalListData'

const VhicalsCard = () => {

    return (
        <div>
            <Container>
                <Row className='mx-auto' style={{ marginTop: '150px' }}>
                    {
                        vhicalListData.map((item) => {
                            const { id, name, description, image } = item
                            return <Col>
                                <Link to={`/destination/${id}`}>
                                    <Card style={{ width: '8rem', height: '10rem', margin: '10px' }}>
                                        <Card.Img variant="top" src={image} />
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        })
                    }
                </Row>
            </Container>


        </div>
    );
};

export default VhicalsCard;