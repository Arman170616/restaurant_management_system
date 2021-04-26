import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';



class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: true
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar dark color='dark' expand='sm'>
                    <div className='container'>
                        <NavbarToggler onClick={this.navToggle} />

                        <NavbarBrand href='/'>pyarena cookies</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>

                            <Nav className='mr-auto' navbar>
                                <NavItem>
                                    <Link to='/' class='nav-link active'>Home</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to='/menu' class='nav-link'>Menu</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to='/about' class='nav-link'>About</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to='/contact' class='nav-link'>Contact</Link>
                                </NavItem>
                            </Nav>

                        </Collapse>

                    </div>

                </Navbar>
            </div>
        );
    }
}

export default Navigation;
