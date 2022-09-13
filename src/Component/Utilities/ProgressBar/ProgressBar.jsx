import React from "react";
import './ProgressBar.scss';

const CustomProgressBar = (props) => {
    let currentNumber = props.currentNumber;
    let maxNumber = props.maxNumber;
    let darkMode = props.darkMode;
    let customClass = props.customClass;

    return (
        <div className={"custom-progress-bar " + customClass + (darkMode ? " progress-bar-dark" : " progress-bar-light")}>
            <span className="number">
                {currentNumber}
            </span>
            <div className="line"></div>
            <span className="number">
                {maxNumber}
            </span>
        </div>
    )
};

CustomProgressBar.defaultProps = {
    currentNumber: 1,
    maxNumber: 1,
    darkMode: false,
    customClass: ""
};

export default CustomProgressBar;