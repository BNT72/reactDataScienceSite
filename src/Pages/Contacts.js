import React, {Component, useEffect, useState} from 'react';
import {
    Card,
    CardGroup,
    Col,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContainer,
    TabContent,
    TabPane
} from "react-bootstrap";
import song from "../Assets/b.mp3";
import vid from "../Assets/v3.mp4";

class Contacts extends Component {
    render() {
        return (
            <Container className={"mt-3"}>
                <Player/>
                <TabContainer id={"ledt-tabs-example"} defaultActiveKey={"first"}>
                    <Row>
                        <Col sm={3}>
                            <Nav variant={"pills"} className={"flex-column mt-2"}>
                                <NavItem>
                                    <NavLink eventKey={"first"}>Программы</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey={"second"}>Языки</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <TabContent className={"mt-3"}>
                                <TabPane eventKey={"first"}>
                                    <CardGroup className={"m-4 "}>
                                        <Card bg={"light"} text={"dark"} border={"light"}>
                                            <Card.Img variant={"top"}
                                                      src={"https://teachmeplease.ru/uploads/organization/logo/415/excel.png"}/>
                                            <Card.Body>
                                                <Card.Title>Exel</Card.Title>
                                                <Card.Text>Программа для работы с электронными таблицами, созданная
                                                    корпорацией Microsoft для Microsoft Windows, Windows NT и Mac OS, а
                                                    также Android, iOS и Windows Phone. Она предоставляет возможности
                                                    экономико-статистических расчетов, графические инструменты и, за
                                                    исключением Excel 2008 под Mac OS X, язык макропрограммирования
                                                    VBA.</Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card bg={"dark"} text={"light"} border={"light"}>
                                            <Card.Img variant={"top"}
                                                      src={"https://yt3.ggpht.com/ytc/AKedOLSCJpqLi2Rq3XDlKs7o3Qw54T0woZ23wgfaQ7CzgQ=s900-c-k-c0x00ffffff-no-rj"}/>
                                            <Card.Body>
                                                <Card.Title>Statistica</Card.Title>
                                                <Card.Text>Программный пакет для статистического анализа, разработанный
                                                    компанией StatSoft, реализующий функции анализа данных, управления
                                                    данными, добычи данных, визуализации данных с привлечением
                                                    статистических методов.</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </CardGroup>
                                </TabPane>
                                <TabPane eventKey={"second"}>
                                    <CardGroup className={"m-4 "}>
                                        <Card bg={"light"} text={"dark"} border={"light"}>
                                            <Card.Img variant={"top"}
                                                      src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png"}/>
                                            <Card.Body>
                                                <Card.Title>R</Card.Title>
                                                <Card.Text>Язык программирования для статистической обработки данных и
                                                    работы с графикой, а также свободная программная среда вычислений с
                                                    открытым исходным кодом в рамках проекта GNU</Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card bg={"dark"} text={"light"} border={"light"}>
                                            <Card.Img variant={"top"}
                                                      src={"https://pbs.twimg.com/profile_images/542953041729576960/zrklnY9n.png"}/>
                                            <Card.Body>
                                                <Card.Title>Python</Card.Title>
                                                <Card.Text>Высокоуровневый язык программирования общего назначения с
                                                    динамической строгой типизацией и автоматическим управлением
                                                    памятью, ориентированный на повышение производительности
                                                    разработчика, читаемости кода и его качества, а также на обеспечение
                                                    переносимости написанных на нём программ.</Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </CardGroup>
                                    <video width="750" height="500" controls >
                                        <source src={vid} type="video/mp4"/>
                                    </video>
                                </TabPane>


                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>

            </Container>
        );
    }
}

export default Contacts;


function Player() {

    // use Audio constructor to create HTMLAudioElement
    const audioTune = new Audio(song);

    // variable to play audio in loop
    const [playInLoop, setPlayInLoop] = useState(false);

    useEffect(() => {
        audioTune.load();
    }, [])

    const playSound = () => {
        audioTune.play();
    }

    const pauseSound = () => {
        audioTune.pause();
    }


    return (
        <span>
            <input type="button" className="btn btn-primary btn-lg btn-block" value="Play" onClick={playSound}></input>
            <input type="button" className="btn btn-secondary btn-lg btn-block" value="Pause"
                   onClick={pauseSound}></input>
        </span>
    );
}