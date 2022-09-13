import React from 'react';
import './Backgrounds.scss';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
    background-image: ${ props => ( `url('${props.imagePath}')` ) };
    opacity: ${ props => (props.opacity) };
`; 

const Backgrounds = (props) => {
    let {id, imageProps} = props;
    let {imagePath, opacity} = imageProps;

    return (
        <BackgroundContainer imagePath={imagePath} opacity={opacity} id={id} className="backgrounds" />
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