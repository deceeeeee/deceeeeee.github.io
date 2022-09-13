import React, {Component} from 'react';
import './Homepage.scss';
import Init from '../../Init/Init';

import Introduction from '../../Component/PagesComponent/Introduction/Introduction';
import Backgrounds from '../../Component/PagesComponent/Backgrounds/Backgrounds';

class Homepage extends Component {
    constructor(props) {
        super(props);

        const config = Init.config;
        const parallax = config.parallax;

        this.state = {
            imagePath: config.imageFolder,
            parallax: parallax
        }
    }

    componentDidMount() {
        // let state = this;
        
        window.addEventListener('resize', function(event){});

    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', function(){});
    }

    render() {
        const imagePath = this.state.imagePath;
        const parallax = this.state.parallax.map((item, index) => {
            item.imagePath = imagePath + item.imageName;
            return item;
        });

        return (
            <div className="homepage">
                <Backgrounds id="first-background" imageProps={parallax[0]} />
                <Introduction />
                <Backgrounds id="second-background" imageProps={parallax[1]} />
                <Introduction />
                <Backgrounds id="third-background" imageProps={parallax[2]} />
                <Introduction />
                <Backgrounds id="fourth-background" imageProps={parallax[3]} />
            </div>
        );
    }
}

export default Homepage;