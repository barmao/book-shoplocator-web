import './Library.css';
import { Container, Grid, Row, Col, Media, Form, Button } from 'react-bootstrap';
import Map from '../Map/Map';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult'



function Library() {
    return (
        <Container fluid="md">
            <SearchBar />
            <Row>
                <Col sm={8}>
                    <Map />
                </Col>
                <Col sm={4}>
                <SearchResult />
                </Col>
            </Row>
        </Container>
    );
}

export default Library;