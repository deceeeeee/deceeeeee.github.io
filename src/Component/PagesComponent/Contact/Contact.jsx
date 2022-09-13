import React from 'react';
import Init from '../../../Init/Init';
import { Row, Col } from 'react-bootstrap';
import ContactInfo from '../../../Data/Contact';

import './Contact.scss';

const contactInfo = ContactInfo();

const Contact = (props) => {
    const FontAwesomeIcon = Init.FontAwesomeIcon;

    return (
        <div className="contact">
            {/* TITLE */}
            <div className="contact-title">
                <h1>
                    WANNA TALK ABOUT IT? LET'S GET IN TOUCH.
                    {/* <br/> */}
                </h1>
            </div>
            {/* 
                CONTENT
                Left - Submenu
                Right - Introduction 
            */}
            <div className="contact-content">
                <Row className="contact-address">
                    <Col md={6} sm={6} className="contact-address-item contact-address-title">
                        <h2>
                            TNG
                        </h2>
                    </Col>

                    <Col md={5} sm={6} className="contact-address-item contact-address-info">
                        {contactInfo.address}                      
                    </Col>
                </Row>

                <h5 className="contact-section-title"> Get In Touch </h5>
                <Row className="contact-info">
                    <Col md={6} className="contact-info-item">
                        <a className="with-underline fade-in" href={"mailto:" + contactInfo.email}>
                            {contactInfo.email}
                        </a>
                    </Col>

                    <Col md={5} className="contact-info-item">
                        <a className="with-underline fade-in" href={"tel:" + contactInfo.phoneno}>
                            {contactInfo.phoneno}
                        </a>
                    </Col>
                </Row>

                <h5 className="contact-section-title"> Follow Us </h5>
                <Row className="contact-socmed">
                    <Col md={6} className="socmed-list">
                        {
                            contactInfo.socmed.map( (item, index) => {
                                return item.hasOwnProperty('show') && item.show ? (
                                    <a target="_blank" 
                                    rel="noopener noreferrer"
                                    className='' 
                                    key={index} href={item.link}> 
                                        <FontAwesomeIcon icon={item.faIcon} />
                                    </a>
                                ) : "";
                            } )
                        }
                    </Col>
                </Row>
            </div>
        </div>
    );
}



export default Contact;