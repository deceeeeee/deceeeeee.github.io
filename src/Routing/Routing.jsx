import Homepage from '../Container/Homepage/Homepage';
import ErrorPage from '../Container/ErrorPage/ErrorPage';
import Introduction from '../Component/PagesComponent/Introduction/Introduction';

const Routes = () => {
    return [
        {
            path: "/",
            name: "Home",
            visibility: true,
            showNav: true,
            showFooter: true,
            component: Homepage,
            icon: ['fas', 'home']
        },
        {
            path: "/",
            name: "About Me",
            visibility: false,
            showNav: true,
            showFooter: true,
            hash: '#about',
            component: Introduction,
            icon: ['fas', 'info-circle']
        },
        {
            path: "/portfolio",
            name: "My Portfolio",
            visibility: true,
            showNav: true,
            showFooter: true,
            component: Homepage,
            icon: ['fas', 'clipboard']
        },
        {
            path: "#contact",
            name: "Contact Me",
            visibility: false,
            showNav: true,
            showFooter: true,
            component: Homepage,
            icon: ['fas', 'phone']
        },
        {
            path: "*",
            name: "Default",
            visibility: false,
            component: ErrorPage
        }
    ];
}

export default Routes;