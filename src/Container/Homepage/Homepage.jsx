import React, {Component} from 'react';
import './Homepage.scss';
import Init from '../../Init/Init';

import Introduction from '../../Component/PagesComponent/Introduction/Introduction';
import Backgrounds from '../../Component/PagesComponent/Backgrounds/Backgrounds';
import Proficiencies from '../../Component/PagesComponent/Proficiencies/Proficiencies';
import Experiences from '../../Component/PagesComponent/Experiences/Experiences';

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
                <Proficiencies />
                <Backgrounds id="third-background" imageProps={parallax[2]} />
                <Experiences />
                <Backgrounds id="fourth-background" imageProps={parallax[3]} />
                <Introduction />
                <Backgrounds id="fifth-background" imageProps={parallax[4]} />
                <Proficiencies />
            </div>
        );
    }
}

export default Homepage;