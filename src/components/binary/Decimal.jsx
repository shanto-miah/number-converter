import React, { useState } from 'react';

import { Row, Col, Form, FormGroup, Label, Alert } from 'reactstrap';
import Switch from '../../svgs/switch.svg';

import Binarytodecimal from '../../functions/Binarytodecimal'

const Decimal = () => {

    let [decimal, setDecimal] = useState('');


    const onChangeHandler = (e) => {
        return convertDecimal(e.target.value);
    }

    const convertDecimal = (binary) => {
        let decimal = Binarytodecimal(binary);

        setDecimal(decimal);

    }


    return (
        <Row>
            <Col sm="6" md="5" lg="4">
                <h3 className="text-truncate">Binary To Decimal</h3>

                

                <Form>

                    <FormGroup>
                        <Label for="binary">Binary</Label>
                        <input className="form-control" onChange={onChangeHandler} type="number" pattern="[0-1]" title="Okksdfvas" placeholder="Enter a binary number..."/>
                    </FormGroup>

                    <FormGroup className="text-center">
                        <img src={Switch} className="my-2" height="25" alt="switch" style={
                            {
                                transform: 'rotate(90deg)'
                            }
                        }/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Decimal</Label>
                        <Alert color="primary" style={
                            {
                                overflowX: 'auto'
                            }
                        }>
                            { decimal ? decimal : 'N/A' }
                        </Alert>
                    </FormGroup>

                </Form>
            </Col>
            <Col sm="6" md="7" lg="8">
                <h1>How This math solved?...</h1>
            </Col>
        </Row>
    );
}

export default Decimal;