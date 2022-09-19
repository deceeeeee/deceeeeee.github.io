import React from 'react';
import Init from '../../../Init/Init';

import './Card.scss';

const Card = (props) => {
    const config = Init.config;
    const FontAwesomeIcon = Init.FontAwesomeIcon;
    let item = props;

    return (
        <div className={"cardboard " + item.customClass}>
            {/* <legend className='proficiency-title'>
                <FontAwesomeIcon icon={item.icon} /> { item.title }
            </legend> */}
            <h3 className='cardboard-title'>
                {
                    item.icon !== null ? (
                        <FontAwesomeIcon icon={item.icon} /> 
                    ) : ''
                } { item.title }
            </h3>
            {
                item.caption !== '' ? (
                    <p className='cardboard-caption'>
                        { item.caption }
                    </p>
                ) : ''
            }
            <div className="cardboard-box">
                {
                    item.text !== '' ? (
                        <div className="cardboard-text">
                            { item.text }
                        </div>
                    ) : ''
                }
                {
                    item.list.length > 0 ? (
                        <ul className='cardboard-list'>
                            {
                                item.list.map((value, key) => {
                                    return (
                                        <li key={key}>
                                            { value }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    ) : ''
                }
            </div>
        </div>
    );
}

Card.defaultProps = {
    title: "",
    icon: null,
    caption: '',
    list: [],
    text: '',
    customClass: ""
}

export default Card;