import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNavHandler = () => {
        setNavOpen((prevState) => {
            return !prevState;
        });
    };
    return (
        <React.Fragment>
            <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>NuCamp</h1>
                            <h2>better way to camp</h2>
                            <hr className="my-2" />
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Navbar dark sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        <NavLink className="nav-link" to="/home">
                            <img src="/assets/images/logo.png" height="30" width="30" alt="NuCamp Logo" />
                        </NavLink>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavHandler} />
                    <Collapse isOpen={navOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/directory">
                                    <i className="fa fa-list fa-lg" /> Directory
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <i className="fa fa-info fa-lg" /> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <i className="fa fa-address-card fa-lg" /> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    );
};

export default Header;
