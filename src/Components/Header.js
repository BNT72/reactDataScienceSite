import React, {Component} from 'react';
import {Container, Nav, Navbar, NavLink,} from "react-bootstrap";
import logo from './logo192.png'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
                                <NavLink href="/blog">Информация</NavLink>
                                <NavLink href="/contacts">Программы</NavLink>
                                <NavLink href="/about">Возможности  data mining</NavLink>
                            </Nav>

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