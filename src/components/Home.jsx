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
                           
                            <ListGroupItem action>Octal</ListGroupItem>
                            <ListGroupItem action>Hexadecimal</ListGroupItem>
                        </ListGroup>

                    </Card>
                </Col>

                <Col md="6" className="mb-4">
                    <Card className="shandow-sm">
                    <CardHeader className="bg-secondary text-light h5">
                        Decimal To
                    </CardHeader>
                        
                        <ListGroup flush>
                        <ListGroupItem action>Binary</ListGroupItem>
                        <ListGroupItem action>Octal</ListGroupItem>
                        <ListGroupItem action>
                            Hexadecimal
                        </ListGroupItem>
                        </ListGroup>

                    </Card>
                </Col>

                <Col md="6" className="mb-4">
                    <Card className="shadow-sm">
                    <CardHeader className="bg-secondary text-light h5">
                        Octal To
                    </CardHeader>
                        
                        <ListGroup flush>
                        <ListGroupItem action>Binary</ListGroupItem>
                        <ListGroupItem action>Decimal</ListGroupItem>
                        <ListGroupItem action>Hexadecimal</ListGroupItem>
                        </ListGroup>

                    </Card>
                </Col>
                
                <Col md="6" className="mb-4">
                    <Card className="shadow-sm">
                    <CardHeader className="bg-secondary text-light h5">
                        Hexadecimal To
                    </CardHeader>
                        
                        <ListGroup flush>
                        <ListGroupItem action>Binary</ListGroupItem>
                        <ListGroupItem action>Decimal</ListGroupItem>
                        <ListGroupItem action>Octal</ListGroupItem>
                        </ListGroup>

                    </Card>
                </Col>
            </Row>
        </Container>
    );


}

export default Home;