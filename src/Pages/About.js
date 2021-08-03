import React, {Component} from 'react';
import {Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container className={"m-3"}>
                <TabContainer id={"ledt-tabs-example"} defaultActiveKey={"first"}>
                    <Row>
                        <Col sm={3}>
                            <Nav variant={"pills"} className={"flex-column mt-2"}>
                                <NavItem>
                                    <NavLink eventKey={"first"}>Design</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey={"second"}>Team</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey={"third"}>Programming</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey={"fourth"}>Frameworks</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey={"fifth"}>Libraries</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <TabContent className={"mt-3"}>
                                <TabPane eventKey={"first"}>
                                        <img width={800} height={500} src={"https://cdn.dribbble.com/users/1187002/screenshots/11193299/drb_4x.jpg"}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur debitis dicta facilis incidunt laboriosam, nesciunt nihil quae, reprehenderit sit, totam voluptatibus. Error fugit id ipsam porro soluta, temporibus voluptatum?</p>
                                </TabPane>
                                 <TabPane eventKey={"second"}>
                                        <img  width={400}  src={"https://art-assorty.ru/wp-content/uploads/2019/08/258-1.jpg"}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur debitis dicta facilis incidunt laboriosam, nesciunt nihil quae, reprehenderit sit, totam voluptatibus. Error fugit id ipsam porro soluta, temporibus voluptatum?</p>
                                </TabPane>
                                 <TabPane  eventKey={"third"}>
                                        <img width={400}  src={"https://i.pinimg.com/originals/1b/33/07/1b330700beab0801c6aa8a4392fd9461.jpg"}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur debitis dicta facilis incidunt laboriosam, nesciunt nihil quae, reprehenderit sit, totam voluptatibus. Error fugit id ipsam porro soluta, temporibus voluptatum?</p>
                                </TabPane>
                                 <TabPane eventKey={"fourth"}>
                                        <img width={400} src={"https://img3.goodfon.ru/wallpaper/nbig/4/64/art-zuppon-devushka-babochki.jpg"}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur debitis dicta facilis incidunt laboriosam, nesciunt nihil quae, reprehenderit sit, totam voluptatibus. Error fugit id ipsam porro soluta, temporibus voluptatum?</p>
                                </TabPane>
                                 <TabPane eventKey={"fifth"}>
                                        <img width={400} src={"https://sun9-50.userapi.com/impf/6kExx9yQOugQoa_HSdYsGiLo-mBnVlKXeaAqSw/C1OJw_jNbQk.jpg?size=604x340&quality=96&sign=87a813aaafe0540886541d75474f9ef3"}/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur debitis dicta facilis incidunt laboriosam, nesciunt nihil quae, reprehenderit sit, totam voluptatibus. Error fugit id ipsam porro soluta, temporibus voluptatum?</p>
                                </TabPane>


                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>

            </Container>
        );
    }
}

export default About;