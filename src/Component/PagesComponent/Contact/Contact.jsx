import React from 'react';
import Init from '../../../Init/Init';
import ContactInfo from '../../../Data/Contact';

import './Contact.scss';

const contactInfo = ContactInfo();

const Contact = (props) => {
    const FontAwesomeIcon = Init.FontAwesomeIcon;
    
    const clickContact = (event, index) => {
        let selectedContact = contactInfo[index];
        window.open(selectedContact.url, "_blank")
    }

    return (
        <div className="contact">
            {/* TITLE */}
            <div className="contact-title">
                <h2>
                    How to reach me?
                </h2>
            </div>
            {/* 
                CONTENT
                Left - Submenu
                Right - Introduction 
            */}
            <div className="contact-content">
                {
                    contactInfo.map((item, index) => {
                        return (
                            <fieldset key={index} className="contact-content-item" onClick={(event) => clickContact(event, index)}>
                                <legend className="contact-content-name">
                                    <FontAwesomeIcon icon={item.icon} /> { item.name }
                                </legend>
                                <span className="contact-content-link">
                                    { item.value }
                                </span>
                            </fieldset>
                        )
                    })
                }
            </div>
        </div>
    );
}



export default Contact;