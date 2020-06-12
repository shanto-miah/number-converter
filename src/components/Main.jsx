import React, { Component } from 'react';

import Navmenu from './Navmenu';
import Route from './Route';

class Main extends Component {
    

    render() {
        return (
            <React.Fragment>
                <Navmenu/>
                <Route/>
            </React.Fragment>
        );
    }
}

export default Main;