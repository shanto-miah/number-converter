import React, { useState } from 'react';

import { Row, Col, Form, FormGroup, Label, Input, Alert, Card, CardBody, CardHeader } from 'reactstrap';
import Switch from '../../svgs/switch.svg';
import { octalTo  } from '../../functions/Numberconverter';

import { Link } from 'react-router-dom';


const Decimal = ({match}) => {


    let [Octal, setOctal] = useState(match.params.num ? match.params.num : '');
    let [Decimal, setDecimal] = useState(octalTo(Octal, 10));


    const onChangeHandler = (e) => {
        let val = e.target.value;

        setOctal(val);

        let Decimal = octalTo(val, 10);
        
        setDecimal(Decimal);
    }

    return (
      <Row>
          <Col sm={{size: 6, order: 'last'}} md="5" lg="4">

            <Card>
                <CardHeader>Octal To Decimal</CardHeader>
                <CardBody>

                    <Form onSubmit={(e) => e.preventDefault() }>

                        <FormGroup>
                            <Label for="Decimal">Octal</Label>
                            <Input type="number" value={Octal} onChange={onChangeHandler}/>
                        </FormGroup>

                        <FormGroup className="text-center">
                            <Link className="card-link" to={`/Decimal-to-Octal/${Decimal}`}>
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