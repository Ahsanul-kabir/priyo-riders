import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
const VhicalsCard = () => {
    return (
        <div>
            <Container>
                <Row className='mx-auto' style={{marginTop:'150px'}}>
                    <Col>
                        <Card style={{ width: '8rem', height:'15rem', margin:'10px' }}>
                            <Card.Img variant="top" src={"holder.js/100px180"} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '8rem', height:'15rem', margin:'10px' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '8rem', height:'15rem',margin:'10px' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '8rem', height:'15rem', margin:'10px'}}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default VhicalsCard;