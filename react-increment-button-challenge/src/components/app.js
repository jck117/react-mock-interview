import React from 'react';
import IncrementButton from './increment-button';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    updateClick = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div className="parent">
                <div className="count">
                    Number of clicks: {this.state.count}
                </div>
                <IncrementButton onClick={this.updateClick}/>
            </div>
        );
    }
}


//Note: Not certain if Akiva was saying this was a better solution or he was saying my code was not optimal because it was doing the same as this