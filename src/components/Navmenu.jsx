import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Navmenu extends Component {
    render() {
        return (
            <Navbar sticky="top" dark color="dark" className="shadow-sm">
                <NavbarBrand href="#">Number Conversion</NavbarBrand>
            </Navbar>
        );
    }
}

export default Navmenu;