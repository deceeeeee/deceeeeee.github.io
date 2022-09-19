import React from 'react';
import Init from '../../../Init/Init';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import './ProjectCarousel.scss';

const config = Init.config;
let carouselConfig = config.carousel;
let portfolioFolder = config.portfolioFolder;

const ProjectThumbnail = (props) => {
    let { item, isActive } = props;
    let imageFolder = portfolioFolder + item.imageFolder;

    return (
        <div className={"project-thumbnail-box " + (isActive ? 'active' : '')} onClick={event => props.onChoose(event)}>
            <img src={imageFolder + item.imageCover} alt="" className="project-thumbnail-img" />
        </div>
    );
}

const ProjectCarousel = (props) => {
    let projectData = props.list;
    let selectedProject = parseInt(props.selectedProject);

    /**
     * Make sure to customize config before storing it to state 
     * if necessary.
     * 
     * E.g: 
     * let carouselConfig = Init.config.carousel
     * carouselConfig.swipeable = false?
     */

     carouselConfig.containerClass = "project-carousel-container";
     carouselConfig.itemClass = "project-carousel-item-holder";
     carouselConfig.infinite = false;
     carouselConfig.showDots = false;
 
     carouselConfig.responsive = {
         desktop: {
             breakpoint: { max: 3000, min: 1200 },
             items: 15
         },
         tablet: {
             breakpoint: { max: 1200, min: 900 },
             items: 10
         },
         mobileTablet: {
             breakpoint: { max: 900, min: 650 },
             items: 8
         },
         mobile: {
             breakpoint: { max: 650, min: 0 },
             items: 4
         }
     }

     const selectProject = (index) => {
        props.onChoose(index);
     }

     const isActive = (currentNumber) => {
        return currentNumber === selectedProject;
     }

    return (
        <div className="project-mini-carousel">
            {/* Project thumbnail-sized snapshots */}
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
                itemClass={carouselConfig.itemClass}
            >
                {
                    projectData.map( (item, index) => {
                        return(
                            <ProjectThumbnail key={index} isActive={isActive(index)} item={item} onChoose={ event => selectProject(index) } />
                        );
                    } )
                }
            </Carousel>
        </div>
    );
}

export default ProjectCarousel;