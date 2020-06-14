import React, { useState } from 'react';

import { Row, Col, Form, FormGroup, Label, Input, Alert, Card, CardBody, CardHeader } from 'reactstrap';
import Switch from '../../svgs/switch.svg';
import { hexadecimalTo  } from '../../functions/Numberconverter';

import { Link } from 'react-router-dom';


const Octal = ({match}) => {


    let [Hexa, setHexa] = useState(match.params.num ? match.params.num : '');
    let [Octal, setOctal] = useState(hexadecimalTo(Hexa, 8));


    const onChangeHandler = (e) => {
        let val = e.target.value;

        setHexa(val);

        let Octal = hexadecimalTo(val, 8);
        
        setOctal(Octal);
    }

    return (
      <Row>
          <Col sm={{size: 6, order: 'last'}} md="5" lg="4">

            <Card>
                <CardHeader>HexaDecimal To Octal</CardHeader>
                <CardBody>

                    <Form onSubmit={(e) => e.preventDefault() }>

                        <FormGroup>
                            <Label for="Octal">Hexadecimal</Label>
                            <Input type="text" value={Hexa} onChange={onChangeHandler}/>
                        </FormGroup>

                        <FormGroup className="text-center">
                            <Link className="card-link" to={`/octal-to-haxadecimal/${Octal}`}>
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