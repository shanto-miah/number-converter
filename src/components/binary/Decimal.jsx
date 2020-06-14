import React, { useState } from 'react';

import { Row, Col, Form, FormGroup, Label, Input, Alert, Card, CardBody, CardHeader } from 'reactstrap';
import Switch from '../../svgs/switch.svg';
import { binaryTo  } from '../../functions/Numberconverter';
import { Link } from 'react-router-dom';


const Decimal = ({match}) => {

    let [binary, setBinary] = useState(match.params.num ? match.params.num : '');
    let [decimal, setDecimal] = useState(binaryTo(binary, 10));

    const onChangeHandler = (e) => {
        let val = e.target.value;

        setBinary(val);

        let decimal = binaryTo(val, 10);
        setDecimal(decimal);
    }

    return (
      <Row>
          <Col sm={{size: 6, order: 'last'}} md="5" lg="4">

            <Card>
                <CardHeader>Binary To Decimal</CardHeader>
                <CardBody>

                    <Form onSubmit={(e) => e.preventDefault() }>

                        <FormGroup>
                            <Label for="binary">Binary</Label>
                            <Input type="number" value={binary} onChange={onChangeHandler}/>
                        </FormGroup>

                        <FormGroup className="text-center">
                            <Link className="card-link" to={`/decimal-to-binary/${decimal}`}>
                                <img src={Switch} className="my-2" height="25" alt="switch" style={{ transform: 'rotate(90deg)' }}/>
                            </Link>
                        </FormGroup>

                        <FormGroup>
                            <Label>Decimal</Label>
                            <Alert color="primary" style={{ overflowX: 'auto' }}>
                                { decimal ? decimal : 'N/A' }
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

export default Decimal;