import React, {Component, createRef} from 'react';
import { Image, Col, Row, Form, Button } from 'react-bootstrap';
import Init from '../../../Init/Init';
import './Footer.scss';

import FormInput from '../../Utilities/FormInput/FormInput';

import ContactInfo from '../../../Data/Contact';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footerInfo: ContactInfo(),
            footerForm: {
                name: {
                    label: "Name",
                    value: createRef(),
                    width: 6, // x < 12
                    type: "text",
                    required: true,
                },
                email: {
                    label: "Email",
                    value: createRef(),
                    width: 6, // x < 12
                    type: "text",
                    required: true,
                },
                phone: {
                    label: "Phone",
                    value: createRef(),
                    width: 6, // x < 12
                    type: "text",
                },
                companyName: {
                    label: "Company Name",
                    value: createRef(),
                    width: 6, // x < 12
                    type: "text",
                },
                subject: {
                    label: "Subject",
                    value: createRef(),
                    width: 12,
                    placeholder: "Type your subject",
                    type: "text",
                },
                body: {
                    label: "Message",
                    value: createRef(),
                    width: 12,
                    placeholder: "Type your message here",
                    type: "textarea"
                },
            },
            prohibitSubmit: true
        };

        this.config = Init.config;
        this.formData = {};
    }

    formUpdate(name, value) {
        this.formData[name] = value;

        if(
            ( this.formData.hasOwnProperty('name') && this.formData.name ) 
            && 
            (this.formData.hasOwnProperty('email') && this.formData.email) 
        ) {
            this.prohibitSubmit(false);
        } else {
            this.prohibitSubmit();
        }
    }

    prohibitSubmit(prohibit = true) {
        let state = this.state;
        state.prohibitSubmit = prohibit;

        this.setState(state);
    }

    recursiveIteration(data, keys, result = '', counter = 0) {
        let max = keys.length;

        if(counter >= max) {
            return result;
        } else {
            return keys[counter] + "=" + encodeURIComponent(data[keys[counter]]) + "&" + this.recursiveIteration(data, keys, result, counter + 1);
        }
    }

    formSubmit(event) {
        let state = this.state;
        let queryString = "";
        let formDataKeys = Object.keys(this.formData);
        let contactInfo = state.footerInfo;
        
        queryString = this.recursiveIteration(this.formData, formDataKeys);

        window.open("mailto:" + contactInfo.email + "?" + queryString.substring(0, queryString.lastIndexOf("&")), "_blank");

        let formElementKeys = Object.keys(state.footerForm);

        for(let i = 0; i < formElementKeys.length; i++) {
            let key = formElementKeys[i];
            state.footerForm[key].value.current.value = "";
        }

        this.prohibitSubmit(true);
    }

    render() {
        let state = this.state;
        let config = this.config;
        let footerInfo = state.footerInfo;
        let FontAwesomeIcon = Init.FontAwesomeIcon;
        let footerForm = state.footerForm;

        let contactInfo = [
            {
                title: "Address",
                content: [footerInfo.address]
            },
            {
                title: "Contact Us",
                content: [
                    (<a key={0} target='_blank' rel="noopener noreferrer" className={"with-underline fade-in"} href={"mailto:" + footerInfo.email}> {footerInfo.email} </a>),
                    (<a key={1} target='_blank' rel="noopener noreferrer" className={"with-underline fade-in"} href={"tel:" + footerInfo.phoneno}> {footerInfo.phoneno} </a>)
                ]
            }
        ];

        return (
            <footer id="contact" className={
                "footer-contact" 
                + 
                (this.props.show ? '' : ' d-none')
            }>
                <h2 className="footer-contact-title">
                    LOCATION
                </h2>
                <div className="footer-contact-content">
                    <div className="content-first-column">
                        <div className="contact-image-container">
                            <a target="_blank" className={""} rel="noopener noreferrer" href={state.footerInfo.maps.link}>
                                <Image src={config.imageFolder + state.footerInfo.maps.image} className="contact-image" />
                            </a>
                        </div>
                        <Row className="contact-info-container">
                                {
                                    contactInfo.map( (item, index) => {
                                        return (
                                            <Col key={index} md={6} className="contact-info-item">
                                                <h3>
                                                    {item.title}
                                                </h3>
                                                <div className="contact-info-content">
                                                {
                                                    item.content.map((v, k) => {
                                                        return v
                                                    })
                                                }
                                                </div>
                                            </Col>
                                        )
                                    } )
                                }
                        </Row>
                        <div className="footer-contact-socmed contact-info-item">
                            <h3>Follow Us</h3>
                            <div className="contact-info-content">
                            {
                                footerInfo.socmed.map((item, index) => {
                                    return (
                                        <a key={index} target='_blank' rel="noopener noreferrer" className={"with-underline fade-in"} href={item.link}>
                                            <FontAwesomeIcon icon={item.faIcon} /> 
                                        </a>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                    <div className="footer-form content-second-column">
                        {/* 
                            Form Send to Email
                        */}
                        <Form className='row'>
                            {
                                Object.keys(footerForm).map( (key, index) => {
                                    let item = footerForm[key];

                                    return (
                                        <FormInput 
                                            key={index} 
                                            attribute={item}
                                            name={key} 
                                            onChange={ (name, value) => this.formUpdate(name, value) } 
                                        />
                                    );
                                } )
                            }

                            <Col md={12}>
                                <Button onClick={(event) => this.formSubmit(event)} disabled={state.prohibitSubmit} className='btn-contact-form'>
                                    Submit
                                </Button>
                            </Col>
                            
                        </Form>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;