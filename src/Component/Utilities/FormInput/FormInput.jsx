import React, {Component} from 'react';
import {Col, FormLabel, FormGroup, FormControl} from 'react-bootstrap';
import './FormInput.scss';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        };
    }

    updateInput(event, input) {
        const onChangeForm = this.props.onChange;

        onChangeForm(input.current.name, input.current.value);
    }

    renderSwitch(item) {
        let inputName = this.props.name;
        let inputType = item.hasOwnProperty('type') && item.type ? item.type : "text";
        let inputAs = "";
        let isRequired = item.hasOwnProperty('required') && item.required;
        let inputPlaceholder = item.hasOwnProperty('placeholder') ? item.placeholder : "Enter your " + item.label.toLowerCase();

        switch(item.type) {
            case "textarea":
                inputAs = "textarea";
                break;
            case 'text':
            case 'number':
            default:
                inputAs = "input";
                break;
        };

        return (
            <FormControl 
                name={inputName}
                as={inputAs}
                type={inputType} 
                ref={item.value} 
                required={isRequired}
                placeholder={inputPlaceholder}
                rows={5} 
                onChange={(event) => this.updateInput(event, item.value)}
                autoComplete={item.autoComplete}
            />
        );

    }

    render() {
        let item = this.props.attribute;
        let isRequired = item.hasOwnProperty('required') && item.required;

        return (
            <Col lg={item.width}>
                <FormGroup>
                    <FormLabel htmlFor="name"> { item.label + (isRequired ? "*" : "") } </FormLabel>
                    {
                        this.renderSwitch(item)
                    }
                    
                </FormGroup>
            </Col>
        );
    }
}

FormInput.defaultProps = {
    attribute: {
        label: "",
        value: "",
        width: 12,
        placeholder: "Enter here",
        type: 'text',
        autoComplete: false
    }
}

export default FormInput;