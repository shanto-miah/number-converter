import React, { useState } from 'react';

import { Row, Col, Form, FormGroup, Label, Input, Alert, Card, CardBody, CardHeader } from 'reactstrap';
import Switch from '../../svgs/switch.svg';
import { decimalTo  } from '../../functions/Numberconverter';

import { Link } from 'react-router-dom';


const Hexa = ({match}) => {


    let [decimal, setDecimal] = useState(match.params.num ? match.params.num : '');
    let [Hexa, setHexa] = useState(decimalTo(decimal, 16));


    const onChangeHandler = (e) => {
        let val = e.target.value;

        setDecimal(val);

        let Hexa = decimalTo(val, 16);
        
        setHexa(Hexa);
    }

    return (
      <Row>
          <Col sm={{size: 6, order: 'last'}} md="5" lg="4">

            <Card>
                <CardHeader>Decimal To Hexadecimal</CardHeader>
                <CardBody>

                    <Form onSubmit={(e) => e.preventDefault() }>

                        <FormGroup>
                            <Label for="Hexa">Decimal</Label>
                            <Input type="number" value={decimal} onChange={onChangeHandler}/>
                        </FormGroup>

                        <FormGroup className="text-center">
                            <Link className="card-link" to={`/hexadecimal-to-decimal/${Hexa}`}>
                                <img src={Switch} className="my-2" height="25" alt="switch" style={{ transform: 'rotate(90deg)' }}/>
                            </Link>
                        </FormGroup>

                        <FormGroup>
                            <Label>Hexadecimal</Label>
                            <Alert color="primary" style={{ overflowX: 'auto' }}>
                                { Hexa ? Hexa : 'N/A' }
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

export default Hexa;