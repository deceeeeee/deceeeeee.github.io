import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { isMobile } from 'react-device-detect';

import Parallax from '../Data/Parallax';

var Init = {};

// Basic config
Init.config = {
    carousel: {
        swipeable: true,
        draggable: true,
        showDots: true,
        responsive: {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1 // optional, default to 1.
            }
        },
        ssr: false, // means to render carousel on server-side.
        infinite: true,
        autoPlay: false,
        autoPlaySpeed: 99999,
        keyBoardControl: true,
        customTransition: "all .5",
        transitionDuration: 500,
        removeArrowOnDeviceType: [
            // "tablet", 
            // "mobile", 
            // "web"
        ],
        deviceType: "web",
        partialVisible: false,
        centerMode: false,
        containerClass: "carousel-container",
        dotListClass: "custom-dot-list-style",
        itemClass: "carousel-item-padding-40-px"
    },
    customImageFilter: {
        none: [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0,
        ],
        grayscale: [
            0.85, 0, 0, 0, 0,
            0.85, 0, 0, 0, 0,
            0.85, 0, 0, 0, 0,
            0, 0, 0, 1, 0,
        ]
    },
    imageFolder: "/assets/images/",
    profileImage: "/assets/images/profpics.png",
    imageLogo: "/assets/logo/logo.png",
    imageLogoAlt: "/assets/logo/logo-alt.png",
    iconFolder: "/assets/icons/",
    isMobile: isMobile,
    parallax: Parallax()
}

Init.config.imageIcon = Init.config.iconFolder + "icon.png";
Init.config.portfolioFolder = Init.config.imageFolder + 'Portfolio_image/';

// Functions
Init.capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

Init.convertKeyToWords = (words) => {
    let splittedWords = words.split('-');

    for(let i=0;i<splittedWords.length;i++) {
        splittedWords[i] = splittedWords[i].charAt(0).toUpperCase() + splittedWords[i].slice(1);
    }

    return splittedWords.join(' ');
}

// Extensions
library.add(fab, fas, far);
Init.FontAwesomeIcon = FontAwesomeIcon;


export default Init;