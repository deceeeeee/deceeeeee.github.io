import Homepage from '../Container/Homepage/Homepage';
import ErrorPage from '../Container/ErrorPage/ErrorPage';

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
            path: "#about",
            name: "About Me",
            visibility: true,
            showNav: true,
            showFooter: true,
            component: Homepage,
            icon: ['fas', 'info-circle']
        },
        {
            path: "#portfolio",
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
            visibility: true,
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