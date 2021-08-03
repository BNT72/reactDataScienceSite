import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import one from "../Assets/pexels-photo-601798.jpeg"
import two from "../Assets/pexels-photo-1072179.jpeg"
import three from "../Assets/pexels-photo-2559941.jpeg"
class CarouselBox extends Component {
    render() {
        return (
            <Carousel >
                <Carousel.Item >
                    <img height={800}  width={1600} className={"d-block w-60"} src={one} alt={"one"}/>
                    <Carousel.Caption><h3>One</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, hic!</p></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={800}  width={1600} className={"d-block w-10"} src={two} alt={"two"}/>
                    <Carousel.Caption><h3>Two</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, hic!</p></Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img height={800}  width={1600} className={"d-block w-10"} src={three} alt={"three"}/>
                    <Carousel.Caption><h3>Three</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, hic!</p></Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;