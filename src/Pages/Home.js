import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardColumns, CardDeck, CardGroup, CardImg, Container} from "react-bootstrap";

class Home extends Component {
    render() {
        return (

            <>
                <CarouselBox/>

                <Container>
                    <h2 className={"text-center m-4 "}>Our team</h2>
                    <CardGroup className={"m-4 "}  >
                        <Card bg={"light"} text={"dark"} border={"light"} >
                            <Card.Img  variant={"top"}  src={"https://yt3.ggpht.com/a/AATXAJyJnXelBcQycuy4-CE5Y9z3KnjjrDXmTJC6Omrm=s900-c-k-c0xffffffff-no-rj-mo"}/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque, facere? Harum?</Card.Text>
                                <Button variant={"primary"}>About Team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg={"dark"} text={"light"} border={"light"}>
                            <Card.Img  variant={"top"}  src={"https://yt3.ggpht.com/a/AATXAJwDkwnc-yPysgQfVfH1UT89G_jQdBuaKG5joRVv3Q=s900-c-k-c0xffffffff-no-rj-mo"}/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque, facere? Harum?</Card.Text>
                                <Button variant={"primary"}>About Team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg={"light"} text={"dark"} border={"light"}>
                            <Card.Img  variant={"top"}  src={"https://yt3.ggpht.com/a/AATXAJzGSs8-uW2jzG0-VKUfG6gPWC91cRurCvhAFg=s900-c-k-c0xffffffff-no-rj-mo"}/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque, facere? Harum?</Card.Text>
                                <Button variant={"primary"}>About Team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg={"dark"} text={"light"} border={"light"}>
                            <Card.Img  variant={"top"}  src={"https://yt3.ggpht.com/a/AATXAJxuPpNlhCuf17lxMzfWNo6jhq3bp31Mmh5KtWsv=s900-c-k-c0xffffffff-no-rj-mo"}/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque, facere? Harum?</Card.Text>
                                <Button variant={"primary"}>About Team</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        );
    }
}

export default Home;