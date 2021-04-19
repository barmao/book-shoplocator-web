import { Container, Grid, Row, Col, Media, Form, Button } from 'react-bootstrap';
function SearchBar() {
    return (
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
                <Col>
                    <Button variant="primary">Learn more</Button>
                </Col>
            </Form.Row>
        </Form>
    );
}

export default SearchBar;