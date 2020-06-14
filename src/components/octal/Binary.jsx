import React, { useState } from 'react';

import { Row, Col, Form, FormGroup, Label, Input, Alert, Card, CardBody, CardHeader } from 'reactstrap';
import Switch from '../../svgs/switch.svg';
import { octalTo  } from '../../functions/Numberconverter';

import { Link } from 'react-router-dom';


const Binary = ({match}) => {


    let [Octal, setOctal] = useState(match.params.num ? match.params.num : '');
    let [binary, setBinary] = useState(octalTo(Octal, 2));


    const onChangeHandler = (e) => {
        let val = e.target.value;

        setOctal(val);

        let binary = octalTo(val, 2);
        
        setBinary(binary);
    }

    return (
      <Row>
          <Col sm={{size: 6, order: 'last'}} md="5" lg="4">

            <Card>
                <CardHeader>Octal To Binary</CardHeader>
                <CardBody>

                    <Form onSubmit={(e) => e.preventDefault() }>

                        <FormGroup>
                            <Label for="binary">Octal</Label>
                            <Input type="number" value={Octal} onChange={onChangeHandler}/>
                        </FormGroup>

                        <FormGroup className="text-center">
                            <Link className="card-link" to={`/binary-to-Octal/${binary}`}>
                                <img src={Switch} className="my-2" height="25" alt="switch" style={{ transform: 'rotate(90deg)' }}/>
                            </Link>
                        </FormGroup>

                        <FormGroup>
                            <Label>Binary</Label>
                            <Alert color="primary" style={{ overflowX: 'auto' }}>
                                { binary ? binary : 'N/A' }
                            </Alert>
                        </FormGroup>

                    </Form>
                </CardBody>
            </Card>

          </Col>

          <Col sm md lg>
              <h3 className="text-truncate">Instuction</h3>
          </Col>
      </Row>  
    );
}

export default Binary;