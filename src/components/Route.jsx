import React from 'react';

import { Container } from 'reactstrap';
import { Route as R } from 'react-router-dom';


import * as cmp from './import/Routes';


const Route = () => {
    return (
        <Container className="py-4">
            <R exact path="/" component={cmp.Home}/>

            <R exact path="/binary-to-decimal/:num?" component={cmp.bTod}/>
            <R exact path="/binary-to-octal/:num?" component={cmp.bToo} />
            <R exact path="/binary-to-hexadecimal/:num?" component={cmp.bToh} />

            <R exact path="/decimal-to-binary/:num?" component={cmp.dTob} />
            <R exact path="/decimal-to-octal/:num?" component={cmp.dToo} />
            <R exact path="/decimal-to-hexadecimal/:num?" component={cmp.dToh} />

            <R exact path="/octal-to-binary/:num?" component={cmp.oTob} />
            <R exact path="/octal-to-decimal/:num?" component={cmp.oTod} />
            <R exact path="/octal-to-hexadecimal/:num?" component={cmp.oToh} />

            <R exact path="/hexadecimal-to-binary/:num?" component={cmp.hTob} />
            <R exact path="/hexadecimal-to-decimal/:num?" component={cmp.hTod} />
            <R exact path="/hexadecimal-to-octal/:num?" component={cmp.hToo} />


        </Container>
    )
}

export default Route;