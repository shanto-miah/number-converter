import React, { useState } from 'react';

import { Row, Col, Form, FormGroup, Label, Input, Alert, Card, CardBody, CardHeader } from 'reactstrap';
import Switch from '../../svgs/switch.svg';
import { decimalTo  } from '../../functions/Numberconverter';

import { Link } from 'react-router-dom';


const Binary = ({match}) => {


    let [decimal, setDecimal] = useState(match.params.num ? match.params.num : '');
    let [binary, setBinary] = useState(decimalTo(decimal, 2));


    const onChangeHandler = (e) => {
        let val = e.target.value;

        setDecimal(val);

        let binary = decimalTo(val, 2);
        
        setBinary(binary);
    }

    return (
      <Row>
          <Col sm={{size: 6, order: 'last'}} md="5" lg="4">

            <Card>
                <CardHeader>Decimal To Binary</CardHeader>
                <CardBody>

                    <Form onSubmit={(e) => e.preventDefault() }>

                        <FormGroup>
                            <Label for="binary">Decimal</Label>
                            <Input type="number" value={decimal} onChange={onChangeHandler}/>
                        </FormGroup>

                        <FormGroup className="text-center">
                            <Link className="card-link" to={`/binary-to-decimal/${binary}`}>
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