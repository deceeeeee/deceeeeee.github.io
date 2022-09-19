import React from 'react';
import Init from '../../../Init/Init';
import programmingLanguages from '../../../Data/ProgrammingLanguages';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import './ProjectPreview.scss';

const config = Init.config;
let carouselConfig = config.carousel;
let {portfolioFolder} = config;

const programmingLanguageData = programmingLanguages();

const TechStackBadges = styled.span`
    $primaryColor: var(--base-primary-color);

    background-color: ${props => props.hasOwnProperty('backColor') && props.backColor !== '' ? props.backColor : `lightblue`};
    color: ${ props => props.hasOwnProperty('textColor') && props.textColor !== '' ? props.textColor : `$primaryColor`};
`;

const CustomDots = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <li
        className={"project-preview-carousel-dot " + (active ? "active" : "")}
        onClick={() => onClick()}
        >
            
        </li>
    );
};

const ProjectPreviewCarousel = (props) => {
    let {snapshots, imageFolder} = props;

    /**
         * Make sure to customize config before storing it to state 
         * if necessary.
         * 
         * E.g: 
         * let carouselConfig = Init.config.carousel
         * carouselConfig.swipeable = false?
         */

     carouselConfig.containerClass = "project-preview-item-container";
     carouselConfig.itemClass = "project-preview-item-holder";
     carouselConfig.centerMode = true;
     carouselConfig.infinite = true;
     carouselConfig.showDots = true;
     
 
     carouselConfig.responsive = {
         desktop: {
             breakpoint: { max: 3000, min: 1200 },
             items: 1
         },
         tablet: {
             breakpoint: { max: 1200, min: 900 },
             items: 1
         },
         mobileTablet: {
             breakpoint: { max: 900, min: 650 },
             items: 1
         },
         mobile: {
             breakpoint: { max: 650, min: 0 },
             items: 1
         }
     }
 
     return (
         <Carousel
             swipeable={carouselConfig.swipeable}
             draggable={carouselConfig.draggable}
             showDots={carouselConfig.showDots}
             responsive={carouselConfig.responsive}
             infinite={carouselConfig.infinite}
             autoPlay={carouselConfig.autoPlay}
             autoPlaySpeed={carouselConfig.autoPlaySpeed}
             transitionDuration={carouselConfig.transitionDuration}
             removeArrowOnDeviceType={carouselConfig.removeArrowOnDeviceType}
             deviceType={carouselConfig.deviceType}
             containerClass={carouselConfig.containerClass}
             customDot={<CustomDots/>}
             itemClass={carouselConfig.itemClass}
         >
             {
                 snapshots.map( (item, index) => {
                    let projectImageFolder = portfolioFolder + imageFolder;

                     return(
                        <div key={index} className="project-preview-image">
                            <img src={projectImageFolder + item} alt={imageFolder} />
                        </div>
                     );
                 } )
             }
         </Carousel>
     );
}

const ProjectPreview = (props) => {
    let {project} = props;
    let projectIsEmpty = Object.keys(project).length === 0;

    return !projectIsEmpty ? (
        <div className="project-preview-container">
            <div className="project-preview-carousel">
                {/* Current Project Snapshots Carousel */}
                <ProjectPreviewCarousel snapshots={project.snapshots} imageFolder={project.imageFolder} />
            </div>
            <div className="project-preview-content">
                <h2 className="project-preview-title">
                    {project.name}
                </h2>
                {
                    project.detail.map( (item, index) => {
                        return (
                            <p key={index} className="project-preview-desc">
                                {item}
                            </p>
                        )
                    } )
                }
                <div className="project-preview-tech-stack">
                    <h5 className='project-preview-tech-stack-title'>Tech Stack:</h5>
                    <div className="project-preview-tech-stack-list">
                        {/* Project Tech Stack */}
                        {
                            project.techStack.map((item, index) => {
                                let lcItem = item.toLowerCase();
                                let backgroundColor = programmingLanguageData.hasOwnProperty(lcItem) ? programmingLanguageData[lcItem].backgroundColor : '';
                                let textColor = programmingLanguageData.hasOwnProperty(lcItem) ? programmingLanguageData[lcItem].color : '';

                                return (
                                    <TechStackBadges backColor={backgroundColor} textColor={textColor} className="project-preview-tech-stack-item">
                                        { item }
                                    </TechStackBadges>
                                )
                            })
                        }
                        
                    </div>

                </div>
            </div>
        </div>
    ) : (
        <div className="project-preview-container">
            <h3 className='project-default-text'>
                Select project below
            </h3>
        </div>
    );
}

ProjectPreview.defaultProps = {
    project: {}
}

export default ProjectPreview;