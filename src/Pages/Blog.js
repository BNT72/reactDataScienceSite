import React, {Component, useEffect, useState} from 'react';
import {Col, Container, Media, Row} from "react-bootstrap";
import song from "../Assets/c.mp3";
import vid from "../Assets/v1.mp4";

class Blog extends Component {
    render() {
        return (
            <Container >
                <Player/>
                <Row>
                    <Col md={"9"} >
                        <Media className={"m-5 "}  >

                            <img width={1000} className={"mr-3"} src={"https://i.gifer.com/7yYe.gif"}/>
                            <Media.Body className={"border-dark"}>
                                <h5>Data mining</h5>
                                <p>собирательное название, используемое для обозначения совокупности методов обнаружения в данных ранее неизвестных, нетривиальных, практически полезных и доступных интерпретации знаний, необходимых для принятия решений в различных сферах человеческой деятельности. Термин введён Григорием Пятецким-Шапироruen в 1989 году.</p>
                            </Media.Body>
                        </Media>
                        <Media className={"m-5"}>
                            <img width={450} className={"mr-3"} src={"https://canri.ai/wp-content/uploads/2020/07/Canri-A-6-BG-2-Kopie-2@3x-8-2.png"}/>
                            <Media.Body>

                                <p>Основу методов data mining составляют всевозможные методы классификации, моделирования и прогнозирования, основанные на применении деревьев решений, искусственных нейронных сетей, генетических алгоритмов, эволюционного программирования, ассоциативной памяти, нечёткой логики. К методам data mining нередко относят статистические методы (дескриптивный анализ, корреляционный и регрессионный анализ, факторный анализ, дисперсионный анализ, компонентный анализ, дискриминантный анализ, анализ временных рядов, анализ выживаемости, анализ связей). Такие методы, однако, предполагают некоторые априорные представления об анализируемых данных, что несколько расходится с целями data mining (обнаружение ранее неизвестных нетривиальных и практически полезных знаний).</p>
                            </Media.Body>
                        </Media>
                        <Media className={"m-5"}>
                            <img width={450} className={"mr-3"} src={"https://avatars.mds.yandex.net/i?id=2a00000179f2c2517f3e348e6be6a366d80e-4079110-images-thumbs&n=13"}/>
                            <Media.Body>
                                <p>Методы data mining могут быть применены как для работы с большими данными, так и для обработки сравнительно малых объемов данных
                                    (полученных, например, по результатам отдельных экспериментов, либо при анализе данных о деятельности компании).
                                    В качестве критерия достаточного количества данных рассматривается как область исследования, так и применяемый алгоритм анализа .
                                    Развитие технологий баз данных сначала привело к созданию специализированного языка — языка запросов к базам данных. Для реляционных баз данных — это язык SQL,
                                    который предоставил широкие возможности для создания, изменения и извлечения хранимых данных. Затем возникла необходимость в получении аналитической информации ,
                                    и тут оказалось, что традиционные реляционные базы данных, хорошо приспособленные, например, для ведения оперативного учёта на предприятии, плохо приспособлены для проведения
                                    анализа. Это привело, в свою очередь, к созданию т. н. «хранилищ данных», сама структура которых наилучшим способом соответствует проведению всестороннего математического анализа.</p>
                            </Media.Body>
                        </Media>
                        <h2> Стоит ли начинать учить data science?</h2>
                        <video width="750" height="500" controls >
                            <source src={vid} type="video/mp4"/>
                        </video>
                    </Col>


                </Row>
            </Container>
        );
    }
}

export default Blog;


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
            <input type="button" className="btn btn-secondary btn-lg btn-block" value="Pause" onClick={pauseSound}></input>
        </span>
    );
}