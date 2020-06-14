import React from 'react';

import { Container } from 'reactstrap';
import { Route as R } from 'react-router-dom';
import Home from './Home';
import { default as xyz } from './binary/Decimal';

const Route = (props) => {
    return (
        <Container className="py-4">
            <R exact path="/" component={Home}/>
            <R exact path="/binary-to-decimal" component={xyz}/>
        </Container>
    )
}

export default Route;