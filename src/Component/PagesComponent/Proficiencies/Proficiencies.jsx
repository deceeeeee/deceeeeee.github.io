import React from 'react';
import Init from '../../../Init/Init';
import './Proficiencies.scss';

import ProficiencyData from '../../../Data/Proficiencies';

function Proficiencies(props) {
    const config = Init.config;
    const FontAwesomeIcon = Init.FontAwesomeIcon;

    const proficiencyData = ProficiencyData();

    return (
        <div className="proficiencies">
            {
                proficiencyData.map((item, index) => {
                    return (
                        <div key={index} className="proficiency-board">
                            {/* <legend className='proficiency-title'>
                                <FontAwesomeIcon icon={item.icon} /> { item.title }
                            </legend> */}
                            <h3 className='proficiency-title'>
                                <FontAwesomeIcon icon={item.icon} /> { item.title }
                            </h3>
                            <ul className='proficiency-list'>
                                {
                                    item.items.map((value, key) => {
                                        return (
                                            <li key={key}>
                                                { value }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Proficiencies;