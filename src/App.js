import React from 'react';
import Navmenu from './components/Navmenu';

import { Container, Row, Col, Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'

function App() {
  return (
    <div  >
      <Navmenu />

      <Container className="py-4">

        <Row className="justify-content-center">

          <Col md="6" className="mb-4">
            <Card className="shadow-sm">
              <CardHeader className="bg-secondary text-light h5">
                Bainary To
              </CardHeader>
                
                <ListGroup flush>
                  <ListGroupItem action>Desimal</ListGroupItem>
                  <ListGroupItem action>Octal</ListGroupItem>
                  <ListGroupItem action>Hexa-Desimal</ListGroupItem>
                </ListGroup>

            </Card>
          </Col>
          <Col md="6" className="mb-4">
            <Card className="shandow-sm">
              <CardHeader className="bg-secondary text-light h5">
                Desimal To
              </CardHeader>
                
                <ListGroup flush>
                  <ListGroupItem action>Bainary</ListGroupItem>
                  <ListGroupItem action>Octal</ListGroupItem>
                  <ListGroupItem action>
                    Hexa-Desimal
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
                  <ListGroupItem action>Bainary</ListGroupItem>
                  <ListGroupItem action>Desimal</ListGroupItem>
                  <ListGroupItem action>Hexa-Desimal</ListGroupItem>
                </ListGroup>

            </Card>
          </Col>
          <Col md="6" className="mb-4">
            <Card className="shadow-sm">
              <CardHeader className="bg-secondary text-light h5">
                Hexa-Desimal To
              </CardHeader>
                
                <ListGroup flush>
                  <ListGroupItem action>Bainary</ListGroupItem>
                  <ListGroupItem action>Desimal</ListGroupItem>
                  <ListGroupItem action>Octal</ListGroupItem>
                </ListGroup>

            </Card>
          </Col>



        </Row>

      </Container>
    </div>
  );
}

export default App;