import React, {Component} from 'react';
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";
class Blog extends Component {
    render() {
        return (
            <Container >
                <Row>
                    <Col md={"9"} >
                        <Media className={"m-5 "}  >
                            <img width={450} className={"mr-3"} src={"https://get.wallhere.com/photo/anime-anime-girls-THE-iDOLM-email-protected-Cinderella-Girls-Ichinose-Shiki-blue-eyes-brunette-long-hair-1349607.jpg\n"}/>
                            <Media.Body className={"border-dark"}>
                                <h5>Block post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum doloremque eos ex, facere fuga iusto laborum maxime molestiae nobis perferendis porro possimus provident, rerum soluta suscipit temporibus vel voluptate.</p>
                            </Media.Body>
                        </Media>
                        <Media className={"m-5"}>
                            <img width={450} className={"mr-3"} src={"https://c.wallhere.com/photos/eb/5a/heterochromia_sky_night_long_hair_white_hair_anime_girls_anime-1147530.jpg!d"}/>
                            <Media.Body>
                                <h5>Block post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum doloremque eos ex, facere fuga iusto laborum maxime molestiae nobis perferendis porro possimus provident, rerum soluta suscipit temporibus vel voluptate.</p>
                            </Media.Body>
                        </Media>
                        <Media className={"m-5"}>
                            <img width={450} className={"mr-3"} src={"https://get.wallhere.com/photo/illustration-long-hair-anime-anime-girls-clouds-blue-school-uniform-visual-novel-schoolgirl-If-My-Heart-Had-Wings-Habane-Kotori-computer-wallpaper-mangaka-143320.jpg"}/>
                            <Media.Body>
                                <h5>Block post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum doloremque eos ex, facere fuga iusto laborum maxime molestiae nobis perferendis porro possimus provident, rerum soluta suscipit temporibus vel voluptate.</p>
                            </Media.Body>
                        </Media>
                        <Media className={"m-5"}>
                            <img width={450} className={"mr-3"} src={"https://get.wallhere.com/photo/illustration-blonde-long-hair-anime-anime-girls-looking-at-viewer-cartoon-school-uniform-mangaka-49934.jpg"}/>
                            <Media.Body>
                                <h5>Block post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum doloremque eos ex, facere fuga iusto laborum maxime molestiae nobis perferendis porro possimus provident, rerum soluta suscipit temporibus vel voluptate.</p>
                            </Media.Body>
                        </Media>
                    </Col>

                    <Col md-3>
                        <h5 className={"text-center mt-5"}>Category</h5>
                        <Card>
                            <ListGroup variant={"flush"}>
                                <ListGroup.Item>
                                    HTML/CSS
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    JavaScript
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Python
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    C++
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className={"mt-3"} bg={"light"}>
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque, aut dolor facilis ipsam maiores quam quia totam unde vitae!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;