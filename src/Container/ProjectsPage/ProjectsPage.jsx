import React, { Component, createRef } from 'react';
import queryString from 'query-string';
import './ProjectsPage.scss';

import PortfolioData from '../../Data/Portfolio';

import ProjectPreview from '../../Component/PagesComponent/ProjectPreview/ProjectPreview';
import ProjectCarousel from '../../Component/PagesComponent/ProjectCarousel/ProjectCarousel';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
     
        const searchParams = queryString.parse(location.search);
        const projectIndex = searchParams.id;

        this.state = {
            currentProject: projectIndex
        }
    }

    selectProject(index) {
        let state = this.state;
        if(state.currentProject !== index) {
            state.currentProject = index;
            this.setState(state);
        }
    }

    render() {
        const projectData = PortfolioData();
        let projectIndex = this.state.currentProject;
        let currentProject = projectData.hasOwnProperty(projectIndex) ? projectData[projectIndex] : {};

        return (
            <div className='projects'>
                <ProjectPreview project={currentProject} />
                <ProjectCarousel list={projectData} selectedProject={projectIndex} onChoose={index => this.selectProject(index)} />
            </div>
        );
    }
}

export default ProjectsPage;