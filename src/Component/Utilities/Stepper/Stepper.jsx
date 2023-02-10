import React from 'react';
import './Stepper.scss';

import styled from 'styled-components';

const ListContainer = styled.ol`
    height: ${ props => ( props.customHeight ) };

    @media screen and (max-width: 768px) {
        height: auto;
        gap: 1rem;
        padding: 0;
    }
`;
const ListItem = styled.li`
    :before {
        background-color: ${props => (props.isActive ? '#0BBFE1' : '#FFF')};
        color: #000;
        content: ${props => (`${props.number}`)}
    }
`;

const Stepper = (props) => {
    const steps = props.steps;

    return (
        <ListContainer customHeight={props.customHeight} className="c-stepper c-stepper-vertical">
            {
                steps.map((item, index) => {
                    let isActive = item.hasOwnProperty('isActive') && item.isActive;
                    
                    return (
                        <ListItem key={index} isActive={isActive} number={index} className="c-stepper__item">
                            <div className="c-stepper__container">
                                <h3 className="c-stepper__title">{ item.title }</h3>
                                <p className="c-stepper__caption">
                                    { item.caption }
                                </p>
                                <p className="c-stepper__desc" dangerouslySetInnerHTML={{__html: item.desc}}>
                                </p>
                            </div>
                        </ListItem>
                    )
                })
            }
        </ListContainer>
    );
};

Stepper.defaultProps = {
    steps: [
        {
            title: '',
            desc: '',
            caption: '',
            isActive: false
        }
    ],
    customHeight: '160vh'
}



export default Stepper;