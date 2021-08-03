import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavLink,} from "react-bootstrap";
import logo from './logo192.png'
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";


class Header extends Component {
    render() {
        return (
            <>
                <Navbar  fixed={"top"} collapseOnSelect={Container} expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={logo}
                                 height={30}
                                 width={30}
                                 className="d-inline-block align-top"
                                 alt="Logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/about">About us</NavLink>
                                <NavLink href="/contacts">Contacts</NavLink>
                                <NavLink href="/blog">Blog</NavLink>
                            </Nav>

                            <Form className="d-lg-flex ">
                                <FormControl type="text"
                                             placeholder="Search"
                                             className="mr-sm-3"/>

                                <Button variant={"outline-info"}>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <br/>
                <br/>
                <Router >
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/about"} component={About}/>
                        <Route exact path={"/contacts"} component={Contacts}/>
                        <Route exact path={"/blog"} component={Blog}/>
                    </Switch>
                </Router>

            </>
        );
    }

}
Header.propTypes = {};

export default Header;