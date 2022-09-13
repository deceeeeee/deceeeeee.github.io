import React from 'react';
import './ErrorPage.scss';

const ErrorPage = (props) => {
    return (
        <div className="error-404">
            <div className="error-container">
                <div className="error-message"> Error 404 | Not Found </div>
            </div>
        </div>
    );
}

export default ErrorPage;