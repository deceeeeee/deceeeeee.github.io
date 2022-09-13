import React from 'react';
import Init from '../../../Init/Init';
import './Introduction.scss';

function Introduction(props) {
    const config = Init.config;
    const profileImage = config.profileImage;

    return (
        <div className="introduction">
            <div className="introduction-title-card">
                <div className="title-container">
                    <img className="profile-image" src={profileImage} alt="profile-image" />
                    <div className="profile-container">
                        <h1> Michael D'Christio </h1>
                        <strong> Junior Web Developer </strong>
                    </div>
                </div>
                <div className="caption-container">
                    <b>Junior Web Developer</b> specialized in <b>PHP</b>, especially <b>Laravel</b> framework. Other than <b>Backend Development</b>, I am also into <b>Frontend Development</b> with <b>ReactJS</b> as my current weapon. Aspire to be a <b>Fullstack Developer</b> with great passion and 2 years experience of <b>Web Development</b>, I am always intrigued with better opportunity to experience and challenge myself to connect with plenty of programmers and be inspired with their knowledge for my self-improvement. Currently I am interested in <b>ReactJS</b>, since the code structure is more organized, reduces a lot of development time, and it is easier to learn. I also wish to learn more about IT infrastructure in the future.
                </div>
            </div>
        </div>
    );
}

export default Introduction;