import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Text from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import TextField from '@material-ui/core/TextField';

import {
    binaryTo, isBinary,
    octalTo, isOctal,
    decimalTo, isDecimal,
    hexadecimalTo, isHexadecimal,
    baseToName
} from '../functions/Numberconverter';
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';


class Convert extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input : this.props.input,
            output : this.convert(this.props.input, this.props.to),
            isTouched : false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.validate = this.validate.bind(this);
    }

    render() {

        let error = this.state.isTouched ? this.validate() : false;

        return (
            <Container maxWidth="md">
                <Box mt={3}>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={8} md={7}>
                            <Card m={5}>
                                <CardContent>
                                    <Text variant="h6">{ `${baseToName(this.props.from)} To ${baseToName(this.props.to)}` }</Text>

                                    <Box mb={2}>
                                        <Divider/>
                                    </Box>

                                    <form onSubmit={(e) => e.preventDefault() }>
                                        <TextField type={ (this.props.from === '16') ? 'text' : 'number' } value={this.state.input} onChange={this.handleInputChange} error={error ? true : false} helperText={error} fullWidth variant="outlined" label={ baseToName(this.props.from) + ' Number' }/>

                                        <Box my={2}>
                                            <Grid container justify="center">
                                                <IconButton component={Link} to={`/${baseToName(this.props.to, 2)}-to-${baseToName(this.props.from, 2)}/${this.state.output ? this.state.output : ''}`}>
                                                    <SwapVertIcon/>
                                                </IconButton>
                                            </Grid>
                                        </Box>

                                        <TextField label={ baseToName(this.props.to) + ' Number' } fullWidth value={ this.state.output ? this.state.output : 'N/A' } variant="outlined" disabled />
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        )
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
}


export default Convert;