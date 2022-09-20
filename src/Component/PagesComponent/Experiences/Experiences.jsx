import React from 'react';
import Init from '../../../Init/Init';
import './Experiences.scss';
import ExperienceData from '../../../Data/Experiences';

import Stepper from '../../Utilities/Stepper/Stepper';


function Experiences(props) {
    const FontAwesomeIcon = Init.FontAwesomeIcon;
    const experienceData = ExperienceData();

    return (
        <div className="experiences">
            <fieldset id="work-career" className="experience-container">
                <legend className="experience-container-title">
                    <FontAwesomeIcon icon={['fas', 'suitcase']} /> Work Career
                </legend>
                <Stepper steps={experienceData.workCareer} />
            </fieldset>

            <fieldset id="project" className="experience-container">
                <legend className="experience-container-title">
                    <FontAwesomeIcon icon={['fas', 'clipboard']} /> Freelance
                </legend>
                <Stepper steps={experienceData.project} />
            </fieldset>

            <fieldset id="education" className="experience-container">
                <legend className="experience-container-title">
                    <FontAwesomeIcon icon={['fas', 'book']} /> Education
                </legend>
                <Stepper steps={experienceData.education} customHeight="100%" />
            </fieldset>
        </div>
    );
}

export default Experiences;