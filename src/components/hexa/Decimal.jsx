import React, { useState } from 'react';

import { Row, Col, Form, FormGroup, Label, Input, Alert, Card, CardBody, CardHeader } from 'reactstrap';
import Switch from '../../svgs/switch.svg';
import { hexadecimalTo  } from '../../functions/Numberconverter';

import { Link } from 'react-router-dom';


const Decimal = ({match}) => {


    let [Hexa, setHexa] = useState(match.params.num ? match.params.num : '');
    let [Decimal, setDecimal] = useState(hexadecimalTo(Hexa, 10));


    const onChangeHandler = (e) => {
        let val = e.target.value;

        setHexa(val);

        let Decimal = hexadecimalTo(val, 10);
        
        setDecimal(Decimal);
    }

    return (
      <Row>
          <Col sm={{size: 6, order: 'last'}} md="5" lg="4">

            <Card>
                <CardHeader>HexaDecimal To Decimal</CardHeader>
                <CardBody>

                    <Form onSubmit={(e) => e.preventDefault() }>

                        <FormGroup>
                            <Label for="Decimal">Hexadecimal</Label>
                            <Input type="text" value={Hexa} onChange={onChangeHandler}/>
                        </FormGroup>

                        <FormGroup className="text-center">
                            <Link className="card-link" to={`/decimal-to-haxadecimal/${Decimal}`}>
                                <img src={Switch} className="my-2" height="25" alt="switch" style={{ transform: 'rotate(90deg)' }}/>
                            </Link>
                        </FormGroup>

                        <FormGroup>
                            <Label>Decimal</Label>
                            <Alert color="primary" style={{ overflowX: 'auto' }}>
                                { Decimal ? Decimal : 'N/A' }
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