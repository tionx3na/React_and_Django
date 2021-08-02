import React, {Component} from 'react';

class Name extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Arun',
        }
    }

    clickMe() {
        this.setState({
            name: "Changed!!"
        })
    }

    clickMe2() {
        this.setState({
            name: "Arun"
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick = {() => this.clickMe()} className = "btn btn-secondary">Change Text</button> &nbsp;
                <button onClick = {() => this.clickMe2()} className = "btn btn-secondary">Revert</button>
            </div>
        )
    }
}

export default Name;