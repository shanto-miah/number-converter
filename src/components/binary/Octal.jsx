import React, { useState } from 'react';

import { Row, Col, Form, FormGroup, Label, Input, Alert, Card, CardBody, CardHeader } from 'reactstrap';
import Switch from '../../svgs/switch.svg';
import { binaryTo  } from '../../functions/Numberconverter';
import { Link } from 'react-router-dom';


const Octal = ({match}) => {

    let [binary, setBinary] = useState(match.params.num ? match.params.num : '');
    let [Octal, setOctal] = useState(binaryTo(binary, 8));



    const onChangeHandler = (e) => {
        let val = e.target.value;

        setBinary(val);

        let Octal = binaryTo(val, 8);
        setOctal(Octal);
    }

    return (
      <Row>
          <Col sm={{size: 6, order: 'last'}} md="5" lg="4">

            <Card>
                <CardHeader>Binary To Octal</CardHeader>
                <CardBody>

                    <Form onSubmit={(e) => e.preventDefault() }>

                        <FormGroup>
                            <Label for="binary">Binary</Label>
                            <Input type="number" value={binary} onChange={onChangeHandler}/>
                        </FormGroup>

                        <FormGroup className="text-center">
                            <Link className="card-link" to={`/octal-to-binary/${Octal}`}>
                                <img src={Switch} className="my-2" height="25" alt="switch" style={{ transform: 'rotate(90deg)' }}/>
                            </Link>
                        </FormGroup>

                        <FormGroup>
                            <Label>Octal</Label>
                            <Alert color="primary" style={{ overflowX: 'auto' }}>
                                { Octal ? Octal : 'N/A' }
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

export default Octal;