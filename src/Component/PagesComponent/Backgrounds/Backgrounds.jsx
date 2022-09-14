import React from 'react';
import './Backgrounds.scss';
import styled from 'styled-components';

import Init from '../../../Init/Init';

const BackgroundContainer = styled.div`
    background-image: ${ props => ( `url('${props.imagePath}')` ) };
    height: ${ props => (props.imageHeight ? props.imageHeight : `100vh`) };
    position: relative;

    .text-container {
        background-color: rgba(255, 255, 255, ${ props => (props.opacity) });
    }
`; 

const Backgrounds = (props) => {
    let {id, imageProps} = props;
    let {imagePath, opacity} = imageProps;
    let customHeight = imageProps.hasOwnProperty('height') && imageProps.height ? imageProps.height : null;

    const FontAwesomeIcon = Init.FontAwesomeIcon;

    return (
        <BackgroundContainer imageHeight={customHeight} imagePath={imagePath} opacity={opacity} id={id} className="backgrounds">
            <div className="text-container">
                {
                    imageProps.hasOwnProperty('title') && imageProps.title !== '' ? (
                        <h2>
                            {
                                (
                                    imageProps.hasOwnProperty('titleIcon') && imageProps.titleIcon !== '' ? (
                                        <FontAwesomeIcon icon={imageProps.titleIcon} />
                                    ) : ''
                                )
                            } { imageProps.title }
                        </h2>
                    ) : ''
                }
            </div>
        </BackgroundContainer>
    );
};

Backgrounds.defaultProps = {
    id: 'default-background',
    imageProps: {
        imagePath: '',
        opacity: 0
    }
}

export default Backgrounds;