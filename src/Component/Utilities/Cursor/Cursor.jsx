import React, { useRef, useEffect } from 'react';
import Init from '../../../Init/Init';
// import { Image } from 'react-bootstrap';
import './Cursor.scss';

const isMobile = Init.config.isMobile;

// const iconFolder = Init.config.iconFolder;
// const navigationCursor = iconFolder + 'cursor-icon.png';

const Cursor = (props) => {
    /**
     * Initiate variables
     */
    const dot = useRef(null);
    // const cursorImage = useRef(Image);

    const cursorVisible = useRef(false);
    const cursorEnlarged = useRef(false);

    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);

    /**
     * Initiate functions & events
     */
    const toggleCursorVisibility = () => {
        dot.current.style.opacity = cursorVisible.current ? 1 : 0;
    };

    const toggleCursorSize = () => {
        let cursorScale = cursorEnlarged.current ? '0.75' : '0.5';

        dot.current.style.transform = 'translate(-50%, -50%) scale(' + cursorScale + ')';
    };

    const rotateCursor = (deg) => {
        dot.current.style.transform = 'rotate(' + deg + 'deg)';
    };

    /**
     * To detect cursor existence in certain element
     */
    const isPointerEventInsideElement = (element) => {
        var pos = {
            x: endX.current,
            y: endY.current
        };
        var rect = element.getBoundingClientRect();
        return  pos.x <= rect.right && pos.x >= rect.left && pos.y < rect.bottom && pos.y > rect.top;
    };

    const isPointerHoverNavLink = () => {
        let navLinks = document.getElementsByClassName('nav-link');
        // let navbarBrand = document.getElementsByClassName('navbar-brand');
        // let navLogo = navbarBrand !== null ? navbarBrand[0].getElementsByTagName('img')[0] : null;
        let navLogo = document.querySelector('.navbar-brand img');
        let isHovering = false;

        if(navLogo !== null) {
            isHovering = isPointerEventInsideElement(navLogo);
    
            for(let i = 0;i < navLinks.length;i++) {
                isHovering = isHovering || isPointerEventInsideElement(navLinks[i]);
            }
        }

        return isHovering;
    }

    /**
    * Use Effect
    */
    const CursorEvent = (eventType) => {
        useEffect(() => {
            let appContainer = document.querySelector('.App');

            if(['mousemove', 'mouseenter', 'mouseleave'].includes(eventType)) {
                appContainer.addEventListener(eventType, function(e){
                    mouseEvent(e, eventType);
                });
            } else {
                let anchorTag = document.querySelectorAll('a');
                for(var i=0;i<anchorTag.length;i++) {
                    anchorTag[i].addEventListener(eventType, function(e){
                        mouseEvent(e, eventType);
                    });
                }
            }

            
            return () => {
                if(['mousemove', 'mouseenter', 'mouseleave'].includes(eventType)) {
                    appContainer.removeEventListener(eventType, function(e){
                        mouseEvent(e, eventType);
                    });
                } else {
                    let anchorTag = document.querySelectorAll('a');
                    for(var i=0;i<anchorTag.length;i++) {
                        anchorTag[i].removeEventListener(eventType, function(e){
                            mouseEvent(e, eventType);
                        });
                    }
                }
            }
        });
    };

    const mouseEvent = (event, eventType) => {
        switch(eventType) {
            case 'mouseover':
            case 'mousedown':
                cursorEnlarged.current = true;
                toggleCursorSize();
                break;
            case 'mouseout':
            case 'mouseup':
                cursorEnlarged.current = false;
                toggleCursorSize();
                break;
            case 'mouseenter':
                cursorVisible.current = true;
                toggleCursorVisibility();
                break;
            case 'mouseleave':
                cursorVisible.current = false;
                toggleCursorVisibility();
                break;
            case 'mousemove':
                cursorVisible.current = true;
                toggleCursorVisibility();

                endX.current = event.pageX;
                endY.current = event.pageY;

                dot.current.style.top   = endY.current + 'px';
                dot.current.style.left  = endX.current + 'px';

                customCursorUpdate();
                
                break;
            default:
                break;
        }
    };

    CursorEvent('mousemove');
    CursorEvent('mouseup');
    CursorEvent('mouseover');
    CursorEvent('mousedown');
    CursorEvent('mouseout');
    CursorEvent('mouseenter');
    CursorEvent('mouseleave');

    /**
     * Customizable Cursor Effect
     */
    const customCursorUpdate = () => {
        let loadingPage = document.getElementsByClassName('loading-page')[0];
        let interiorCarousel = document.getElementById('interior-design');
        // let footer = document.getElementsByClassName('footer-contact')[0];
        let isOnNavLink = isPointerHoverNavLink();

        if(isMobile || (!loadingPage.classList.contains('hide') && isPointerEventInsideElement(loadingPage))) {
            cursorVisible.current = false;
            toggleCursorVisibility();
        } else if(interiorCarousel !== null && (isPointerEventInsideElement(interiorCarousel) && !isOnNavLink)) {
            customCursorFunction.interiorCarousel();
        } 
        // else if(isPointerEventInsideElement(footer)) {
        //     console.log('Inside Footer: ' + isPointerEventInsideElement(footer));
        //     customCursorFunction.footerCursor();
        // } 
        else {
            customCursorFunction.defaultCursor(isOnNavLink);
        }
    };

    const customCursorFunction = {
        defaultCursor: (isOnNavLink) => {
            // cursorImage.current.src = '';
            // cursorImage.current.style.display = 'none';
            cursorEnlarged.current = isOnNavLink;
            toggleCursorSize();

            // dot.current.style.transform = 'translate(-50%, -50%) scale(0.5)';
            dot.current.className = 'cursor-dot default';
        },
        interiorCarousel: () => {
            // cursorImage.current.src = navigationCursor;
            // cursorImage.current.style.display = 'inline';
            dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
            dot.current.className = 'cursor-dot interior-carousel';

            if(endX.current <= (window.innerWidth / 2)) {
                rotateCursor(180);
            } else {
                rotateCursor(0);
            }
        },
        footerCursor: () => {
            // cursorEnlarged.current = isOnNavLink;
            // toggleCursorSize();

            dot.current.className = 'cursor-dot footer-cursor';
        }
    };

    return (
        <>
            <div ref={dot} id="custom-cursor-dot" className={"cursor-dot default"}>
                {/* <Image fluid ref={cursorImage} alt={"Custom Cursor"} />     */}
            </div>  
        </>
    );
}

Cursor.defaultProps = {
    eventType: ""
}

export default Cursor;