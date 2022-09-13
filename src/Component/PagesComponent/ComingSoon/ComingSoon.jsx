import React, {Component} from 'react';
import './ComingSoon.scss';

class ComingSoon extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="coming-soon">
                <h1>
                    { this.props.title }
                </h1>
            </div>
        );
    }
}

export default ComingSoon;