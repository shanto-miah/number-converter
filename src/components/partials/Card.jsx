import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Switch from '../../svgs/switch.svg';

import {
    binaryTo, isBinary,
    octalTo, isOctal,
    decimalTo, isDecimal,
    hexadecimalTo, isHexadecimal,
    baseToName
} from '../../functions/Numberconverter';

import { Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Alert, FormFeedback } from 'reactstrap';


class Mycard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input : this.props.input,
            output : this.convert(this.props.input, this.props.to),
            isTouched : false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    convert(val, base) {
        switch (this.props.from) {
            case '2':
                return binaryTo(val, base);
            case '8':
                return octalTo(val, base);
            case '10':
                return decimalTo(val, base);
            default:
                return hexadecimalTo(val, base);
        }
    }

    handleInputChange(e) {
        let value = e.target.value;

        this.setState({
            input : value,
            output : this.convert(value, this.props.to),
            isTouched : ((value.length <= 0) ? false : true)
        });
    }

    validate() {
        let value = this.state.input;


        switch (this.props.from) {
            case '2':
                if(!isBinary(value)) {
                    return "Wrong Binary Number /:-"
                }
                break;
            case '8':
                if(!isOctal(value)) {
                    return "Wrong Octal Number (:-"
                }
                break;
            case '10':
                if(!isDecimal(value)) {
                    return "Wrong Decimal Number /:-"
                }
                break;
            default:
                if(!isHexadecimal(value)) {
                    return "Wrong Hexadecimal Number /:-"
                }
            break;
        }
        
        return false;
    }

    render() {
        let error = this.state.isTouched ? this.validate() : false;

        return (
            <Col sm={{size: 6, order: 'last'}} md="5" lg="4">
    
                <Card>
                    <CardHeader className="bg-secondary text-light">{ `${baseToName(this.props.from)} To ${baseToName(this.props.to)}` }</CardHeader>
                    <CardBody>
    
                        <Form onSubmit={(e) => e.preventDefault() }>
    
                            <FormGroup>
                                <Label for="input">{ baseToName(this.props.from) } Number</Label>
                                <Input type={ (this.props.from === '16') ? 'text' : 'number' } valid={!error} invalid={error} id="input" value={this.state.input} onChange={this.handleInputChange}/>
                                <FormFeedback>{error}</FormFeedback>
                            </FormGroup>
    
                            <FormGroup className="text-center">
                                <Link className="card-link" to={`/${baseToName(this.props.to, 2)}-to-${baseToName(this.props.from, 2)}/${this.state.output ? this.state.output : ''}`}>
                                    <img src={Switch} className="my-2" height="25" alt="switch" style={{ transform: 'rotate(90deg)' }}/>
                                </Link>
                            </FormGroup>
    
                            <FormGroup>
                                <Label>{ baseToName(this.props.to) } Number</Label>
                                <Alert color="primary" style={{ overflowX: 'auto' }}>
                                    { this.state.output ? this.state.output : 'N/A' }
                                </Alert>
                            </FormGroup>
    
                        </Form>
                    </CardBody>
                </Card>
    
            </Col>
    
        );

    }

}


export default Mycard;