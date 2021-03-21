import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import SearchResult from '../SearchResult/SearchResult';
import "./SearchFrom.css"
// const { register, handleSubmit, watch, errors } = useForm();
const SearchFrom = () => {
    const { id } = useParams()
    const [value, setValue] = useState(null);
    const [show, setShow] = useState(false)
    const [toValue, setToValue] = useState('');
    const [fromValue, setFromValue] = useState('');

    useEffect(() => {
        if (id === '1') {
            setValue(1)
        }
        if (id === '2') {
            setValue(2)
        }
        if (id === '3') {
            setValue(3)
        }
        if (id === '4') {
            setValue(4)
        }
    }, [show])
    const handleFromValue = (e) => {
        const value = e.target.value;
        setFromValue(value)
    }
    const handleToValue = (e) => {
        const value = e.target.value;
        setToValue(value)
    }
    const handleSearch = (e) => {
        e.preventDefault();
        setShow(true)
    }
    return (
        <Container>
            <Row>
                <Col>
                    <div className="form" style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <form style={{ marginLeft: '10px' }}>
                            <label htmlFor="pickFrom">
                                Pick From
                                </label>
                            <br />
                            <input placeholder='Your Destination From' class="form-control form-control-sm" type="text" name="pickFrom" id="pickFrom" onChange={handleFromValue} required/>
                            <br />
                            <label htmlFor="pickTo">
                                Pick To
                                </label>
                            <br />
                            <input placeholder='Your Destination To' class="form-control form-control-sm" type="text" name="pickTo" id="pickTo" onChange={handleToValue} required/>
                            <br />


                            <Link style={{textDecoration: 'none'}} to={`/searchResult`}>
                            <button>Search</button>
                                </Link>
                        </form>

                        {/* {show && <SearchResult value={value} fromValue={fromValue} toValue={toValue} />
                            } */}
                    </div>
                    <div className="map">
                        <section class="mt-5 container">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.095885694224!2d90.38499431498123!3d23.74395988459254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b9c07b1693%3A0xe3defcf29e04f9e7!2sPriyoShop.com!5e0!3m2!1sen!2sbd!4v1610637019966!5m2!1sen!2sbd"
                                    width="100%" height="200" frameborder="0" style={{border:'10px solid gray'}} aria-hidden="false" tabindex="0" allowfullscreen></iframe>
                            </div>
                        </section>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchFrom;

