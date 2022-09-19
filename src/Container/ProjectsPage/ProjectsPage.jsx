import React, { Component, createRef } from 'react';
import './ProjectsPage.scss';

import PortfolioData from '../../Data/Portfolio';

import ProjectPreview from '../../Component/PagesComponent/ProjectPreview/ProjectPreview';
import ProjectCarousel from '../../Component/PagesComponent/ProjectCarousel/ProjectCarousel';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentProject: null
        }
    }

    componentDidMount() {
        // console.log(this.state);
    }

    selectProject(index) {
        let state = this.state;
        state.currentProject = index;
        this.setState(state);
    }

    render() {
        const projectData = PortfolioData();
        let projectIndex = this.state.currentProject;
        let currentProject = projectData.hasOwnProperty(projectIndex) ? projectData[projectIndex] : {};

        return (
            <div className='projects'>
                <ProjectPreview project={currentProject} />
                <ProjectCarousel list={projectData} selectedProject={this.state.currentProject} onChoose={index => this.selectProject(index)} />
            </div>
        );
    }
}

export default ProjectsPage;