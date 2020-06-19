import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import Navmenu from './Navmenu';
import Convert from './Convert';
import Home from './Home';
import SpeedDials from './SpeedDials';
import Devinfo from './Devinfo';

const Routes = ({location}) => {    
    return (
        <>
            <SpeedDials/>
            
            <Navmenu path={location.pathname}/>

            <Route exact path="/" component={Home}/>
            <Route exact path="/developer-info" component={Devinfo}/>

            <Route exact path="/binary-to-octal/:num?" component={({match}) => (<Convert from="2" to="8" input={match.params.num ? match.params.num : ''} />)} />
            <Route exact path="/binary-to-decimal/:num?" component={({match}) => (<Convert from="2" to="10" input={match.params.num ? match.params.num : ''} />)}/>
            <Route exact path="/binary-to-hexadecimal/:num?" component={({match}) => (<Convert from="2" to="16" input={match.params.num ? match.params.num : ''} />)} />

            <Route exact path="/octal-to-binary/:num?" component={({match}) => (<Convert from="8" to="2" input={match.params.num ? match.params.num : ''} />)} />
            <Route exact path="/octal-to-decimal/:num?" component={({match}) => (<Convert from="8" to="10" input={match.params.num ? match.params.num : ''} />)} />
            <Route exact path="/octal-to-hexadecimal/:num?" component={({match}) => (<Convert from="8" to="16" input={match.params.num ? match.params.num : ''} />)} />

            <Route exact path="/decimal-to-binary/:num?" component={({match}) => (<Convert from="10" to="2" input={match.params.num ? match.params.num : ''} />)} />
            <Route exact path="/decimal-to-octal/:num?" component={({match}) => (<Convert from="10" to="8" input={match.params.num ? match.params.num : ''} />)} />
            <Route exact path="/decimal-to-hexadecimal/:num?" component={({match}) => (<Convert from="10" to="16" input={match.params.num ? match.params.num : ''} />)} />

            
            <Route exact path="/hexadecimal-to-binary/:num?" component={({match}) => (<Convert from="16" to="2" input={match.params.num ? match.params.num : ''} />)} />
            <Route exact path="/hexadecimal-to-octal/:num?" component={({match}) => (<Convert from="16" to="8" input={match.params.num ? match.params.num : ''} />)} />
            <Route exact path="/hexadecimal-to-decimal/:num?" component={({match}) => (<Convert from="16" to="10" input={match.params.num ? match.params.num : ''} />)} />
        </>
    )
}

class Main extends Component {
    
    render() {
        return (
            <Route path="/" component={Routes} />
        );
    }
}

export default Main;

