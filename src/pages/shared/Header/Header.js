import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/btp-logo.jpg';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const activeStyle = { backgroundColor: 'peru', color: 'white', borderRadius: '50px 30px' };

    const { user, logOut } = useAuth();
    console.log(user)

    return (
        <div>
            <div>
                <Navbar>
                    <Container>
                        <div className="d-flex logo-container">
                            <img src={logo} />
                            <h2>Bangladesh <span>Tour Planner</span></h2>
                        </div>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <div className="d-flex align-items-center">
                                {
                                    user?.email && <img className="user-profile me-2" src={user.photoURL} />
                                }
                                {
                                    user?.email && <p className="my-auto me-3 user-name">{user.displayName}</p>
                                }
                            </div>
                            {user?.email ?
                                <button onClick={logOut} className="sign-btn">Sign Out</button> :
                                <NavLink to="/signIn"><button className="sign-btn">Sign In </button></NavLink>
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="d-lg-flex justify-content-between">
                        <Nav
                            className=" my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink activeStyle={activeStyle} className="menu-btn" to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} className="menu-btn" to="/tourDetail/:id">Tour Detail</NavLink>
                            <NavLink activeStyle={activeStyle} className="menu-btn" to="/branches">Branches</NavLink>
                            <NavLink activeStyle={activeStyle} className="menu-btn" to="/about">About Us</NavLink>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <button className="search-btn">Search</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;