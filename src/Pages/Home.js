import React, {Component, useEffect, useState} from 'react';
import CarouselBox from "../Components/CarouselBox";
import song from "../Assets/a.mp3"
import vid from "../Assets/v2.mp4";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true
        };
        this.url = "http://streaming.tdiradio.com:8000/house.mp3";
        this.audio = new Audio(this.url);
    }

    play() {
        this.setState({
            play: true,
            pause: false
        });
        console.log(this.audio);
        this.audio.play();
    }

    pause() {
        this.setState({play: false, pause: true});
        this.audio.pause();
    }

    render() {
        return (
            <>
                <Player/>
                <CarouselBox/>
                <div className={"text-center"}>
                    <video width="750" height="500" controls>
                        <source src={vid} type="video/mp4"/>
                    </video>
                </div>
            </>
        );
    }
}

export default Home;

function Player() {
    const audioTune = new Audio(song);
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
