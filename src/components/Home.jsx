import React from 'react';

import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

const Home = (props) => {
    

    return (
        <Container className="py-4">

            <Row className="justify-content-center">

                <Col md="6" className="mb-4">
                    <Card className="shadow-sm">
                    <CardHeader className="bg-secondary text-light h5">
                        Binary To
                    </CardHeader>
                        
                        <ListGroup flush>

                            <Link className="list-group-item-action list-group-item"
                                to="/binary-to-decimal">
                                Decimal
                            </Link>
                            <Link className="list-group-item-action list-group-item"
                                to="/binary-to-octal">
                                Octal
                            </Link>
                            <Link className="list-group-item-action list-group-item"
                                to="/binary-to-hexadecimal">
                                Hexadecimal
                            </Link>
                           
                        </ListGroup>

                    </Card>
                </Col>

                <Col md="6" className="mb-4">
                    <Card className="shandow-sm">
                    <CardHeader className="bg-secondary text-light h5">
                        Decimal To
                    </CardHeader>
                        
                        <ListGroup flush>
                            <Link className="list-group-item-action list-group-item"
                                to="/decimal-to-binary">
                                Binary
                            </Link>
                            <Link className="list-group-item-action list-group-item"
                                to="/decimal-to-octal">
                                Octal
                            </Link>
                            <Link className="list-group-item-action list-group-item"
                                to="/decimal-to-hexadecimal">
                                Hexadecimal
                            </Link>
                        </ListGroup>

                    </Card>
                </Col>

                <Col md="6" className="mb-4">
                    <Card className="shadow-sm">
                    <CardHeader className="bg-secondary text-light h5">
                        Octal To
                    </CardHeader>
                        
                        <ListGroup flush>
                            <Link className="list-group-item-action list-group-item"
                                to="/octal-to-binary">
                                Binary
                            </Link>
                            <Link className="list-group-item-action list-group-item"
                                to="/octal-to-decimal">
                                Decimal
                            </Link>
                            <Link className="list-group-item-action list-group-item"
                                to="/octal-to-hexadecimal">
                                Hexadecimal
                            </Link>
                        </ListGroup>

                    </Card>
                </Col>
                
                <Col md="6" className="mb-4">
                    <Card className="shadow-sm">
                    <CardHeader className="bg-secondary text-light h5">
                        Hexadecimal To
                    </CardHeader>
                        
                        <ListGroup flush>
                            <Link className="list-group-item-action list-group-item"
                                to="/hexadecimal-to-binary">
                                Binary
                            </Link>
                            <Link className="list-group-item-action list-group-item"
                                to="/hexadecimal-to-octal">
                                Octal
                            </Link>
                            <Link className="list-group-item-action list-group-item"
                                to="/hexadecimal-to-decimal">
                                Decimal
                            </Link>
                        </ListGroup>

                    </Card>
                </Col>
            </Row>
        </Container>
    );


}

export default Home;