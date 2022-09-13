import React, {Component} from 'react';
import './Homepage.scss';


import Header from '../../Component/PagesComponent/Header/Header';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // let state = this;
        
        window.addEventListener('resize', function(event){});

    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', function(){});
    }

    render() {
        return (
            <div className="homepage">
                <Header />
            </div>
        );
    }
}

export default Homepage;