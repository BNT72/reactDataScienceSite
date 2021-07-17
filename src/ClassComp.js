import React, {Component} from 'react';

export default class ClassComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.zero = this.zero.bind(this);
    }

    plus() {
        this.setState(state=>({
            count:state.count+1
        }));
    }
    minus() {
        this.setState(state=>({
            count:state.count-1
        }));
    }

    zero() {
        this.setState(state=>({
            count:0
        }));
    }

    render() {

            return (
            <div>
                <button onClick={this.plus}>plus</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.zero}>zero</button>
                <br/>
                <h1>{this.state.count}</h1>
            </div>
        );


    }
}

Component.defaultProps = {name: ["CHEL", "asd"]}