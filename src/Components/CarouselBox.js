import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";

class CarouselBox extends Component {
    render() {
        return (
            <Carousel >
                <Carousel.Item >
                    <img height={800}  width={1600} className={"d-block w-60"} src={"https://www.promptcloud.com/wp-content/uploads/2020/02/Data-Mining.png"}/>
                    <Carousel.Caption className="font-weight-bold text-dark"><h3 >Data mining</h3> <p>Вот за чем стоит будущее планеты</p></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={800}  width={1600} className={"d-block w-10"} src={"https://sapheiros.com/wp-content/uploads/2017/05/Data-Mining.jpg"} />

                </Carousel.Item>
                <Carousel.Item>
                    <img height={800}  width={1600} className={"d-block w-10"} src={"https://i.gifer.com/KHp5.gif"} alt={"three"}/>

                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;