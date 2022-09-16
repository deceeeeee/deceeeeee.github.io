import React, {Component, Fragment, createRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './Component/Include/Navbar/Navbar';
import NavigationContext from './Context/NavigationContext';
import Footer from './Component/Include/Footer/Footer';

import Cursor from './Component/Utilities/Cursor/Cursor';
import CursorContext from './Context/CursorContext';

import Routes from './Routing/Routing';
import Init from './Init/Init';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: window.location.pathname,
      appRef: createRef()
    }
  };

  static contextType = NavigationContext;

  componentDidMount() {
    let state = this.state;
    let config = Init.config;

  }

  pathMatch(currentPath) {
    let routes = Routes();

    let hasNavRoutes = routes.filter( (value, key) => {
      return value.showNav;
    } ).map( (item) => {
      return item.path;
    } );

    return hasNavRoutes.includes(currentPath);
  }

  render() {
    const routes = Routes();
    const state = this.state;

    let hasFooterRoutes = routes.filter( (value, key) => {
      return value.showFooter;
    } ).map( (item) => {
      return item.path;
    } );

    const handleNavClick = (path) => {
      let state = this.state;
      state.currentRoute = path;

      this.setState(state);
    }

    console.log('Render App');

    return(
      <div ref={state.appRef} className={"App"}>
        <NavigationBar show={this.pathMatch(state.currentRoute)} navList={routes} onChoose={(path) => handleNavClick(path)} />
        {/* <Footer show={ this.state.showApp && hasFooterRoutes.includes(this.state.currentRoute) } /> */}
      </div>
    );
  }
}

export default App;
