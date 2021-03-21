import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import SearchResult from '../SearchResult/SearchResult';
import "./SearchFrom.css"
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
                    <main>
                        <div className="form">
                            <form>
                                <label htmlFor="pickFrom">
                                    Pick From
                                </label>
                                <br />
                                <input type="text" name="pickFrom" id="pickFrom" onChange={handleFromValue} />
                                <br />
                                <label htmlFor="pickTo">
                                    Pick To
                                </label>
                                <br />
                                <input type="text" name="pickTo" id="pickTo" onChange={handleToValue} />
                                <br />
                                <button type="submit" onClick={handleSearch}>Search</button>
                            </form>

                            {show && <SearchResult value={value} fromValue={fromValue} toValue={toValue} />
                            }
                        </div>
                        <div className="map">

                        </div>
                    </main>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchFrom;

