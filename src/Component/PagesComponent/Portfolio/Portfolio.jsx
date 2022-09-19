import React from 'react';
import Init from '../../../Init/Init';

import PortfolioData from '../../../Data/Portfolio';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import './Portfolio.scss';

const FontAwesomeIcon = Init.FontAwesomeIcon;
const config = Init.config;
const imageFolder = config.imageFolder;
const portfolioFolder = config.portfolioFolder;
let carouselConfig = config.carousel;

const PortfolioItem = (props) => {
    let { projectIndex, item } = props;
    let {name, type, desc, imageFolder, imageCover} = item;
    imageCover = portfolioFolder + imageFolder + imageCover;

    return (
        <div className="portfolio-item">
            <img className='portfolio-cover' src={ imageCover } alt={ name } />
            <div className="portfolio-info-container">
                <div className="portfolio-info">
                    <h3 className='portfolio-info-name'>{ name }</h3>
                    <span className="portfolio-info-type">
                        { type }
                    </span>
                    <p className="portfolio-info-desc">
                        { desc }
                    </p>
                    <div className="portfolio-btn-container">
                        <a href={"/projects?id=" + projectIndex} className="btn-portfolio btn-portfolio-detail">
                            <FontAwesomeIcon icon={['fas', 'info-circle']}/> Details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CustomDots = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <li
        className={"portfolio-carousel-dot " + (active ? "active" : "")}
        onClick={() => onClick()}
        >
            
        </li>
    );
};

const Portfolio = (props) => {
    let portfolioData = PortfolioData();

    portfolioData = portfolioData.slice(0, 5);
    
    /**
         * Make sure to customize config before storing it to state 
         * if necessary.
         * 
         * E.g: 
         * let carouselConfig = Init.config.carousel
         * carouselConfig.swipeable = false?
         */

    carouselConfig.containerClass = "portfolio-container";
    carouselConfig.itemClass = "portfolio-item-holder";
    carouselConfig.centerMode = true;
    carouselConfig.infinite = false;

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
                portfolioData.map( (item, index) => {
                    return(
                        <PortfolioItem key={index} projectIndex={index} item={item} />
                    );
                } )
            }
            <div className="portfolio-item dark-bg">            
                <img className='portfolio-cover' src={ imageFolder + 'firstbackground.jpg' } alt={ 'others' } />
                <div className="portfolio-info-container">
                    <h3 className="portfolio-info-name">
                        Click here to see more projects!
                    </h3>
                    <br />
                    <a href="/projects?id=5" className="btn-portfolio btn-portfolio-detail">
                        <FontAwesomeIcon icon={['fas', 'info-circle']}/> Details
                    </a>
                </div>
            </div>
        </Carousel>
    );
}

export default Portfolio;