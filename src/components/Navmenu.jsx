import React, { useState } from 'react';


import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navmenu = (props) => {
    const [isOpen, setIsopen] = useState(false);

    const toggle = () => setIsopen(!isOpen);

    return (
        <Navbar sticky="top" dark color="dark" expand="sm" className="shadow-sm">
            <NavbarBrand tag={Link} to="/" className="d-inline-block text-truncate">Number Conversion</NavbarBrand>

            <NavbarToggler onClick={toggle}/>

            <Collapse isOpen={isOpen} navbar>
            
                <Nav navbar className="ml-auto">
                    <NavItem>
                        <NavLink>Developer Info</NavLink>
                    </NavItem>
                </Nav> 
            
            </Collapse>
        </Navbar>
    );
}

export default Navmenu;