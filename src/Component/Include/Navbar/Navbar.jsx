import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './Navbar.scss';
import {Routes, BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import Init from '../../../Init/Init';

// import NavigationContext from '../../../Context/NavigationContext';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPath: window.location.pathname
        };
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {

    }

    getCurrentPath(path) {
        let state = this.state;
        state.currentPath = path;

        this.setState(state);

        this.props.onChoose(path);
    }

    componentWillUnmount() {
        this.setState = (state,callback)=>{
            return;
        };

        window.removeEventListener('resize', () => {});
    }

    render() {
        let state = this.state;
        const FontAwesomeIcon = Init.FontAwesomeIcon;

        return (
            <Fragment>
                <Router>
                    <Navbar ref={state.navbarElement} expand="md" variant='dark'>
                        <Navbar.Brand href="/">
                            @deceeeeee
                        </Navbar.Brand>
                        
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                        </Navbar.Toggle>

                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
                            <Nav className="">
                                {
                                    this.props.navList.map( (item, index) => {
                                        let navLinks = "";

                                        if(item.hasOwnProperty('visibility') && item.visibility) {
                                            navLinks = (
                                                <NavLink key={index} 
                                                    to={item.path} 
                                                    className="nav-link ml-2" 
                                                    onClick={() => this.getCurrentPath(item.path)}
                                                > 
                                                    <FontAwesomeIcon icon={item.icon} /> {item.name} 
                                                </NavLink>
                                            );
                                        }

                                        return navLinks;
                                    } )
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    {/* Render the first matched path */}
                    <Routes>
                        {
                            this.props.navList.map((route, i) => {
                                    return (
                                        <Route
                                            key={i}
                                            path={route.path}
                                            element={<route.component/>}
                                        />
                                    )
                                } 
                            )
                        }
                    </Routes>
                </Router>
            </Fragment>
        );
    }
}

export default NavigationBar;