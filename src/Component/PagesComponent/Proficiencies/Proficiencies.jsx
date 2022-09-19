import React from 'react';
import './Proficiencies.scss';

import ProficiencyData from '../../../Data/Proficiencies';
import Card from '../../Utilities/Card/Card';

function Proficiencies(props) {
    const proficiencyData = ProficiencyData();
    let customClass = 'proficiency-board';

    return (
        <div className="proficiencies">
            {
                proficiencyData.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            list={item.items}
                            customClass={customClass}
                        />
                    )
                })
            }
        </div>
    );
}

export default Proficiencies;