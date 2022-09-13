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
            component: Homepage
        },
        {
            path: "/",
            name: "Products",
            visibility: true,
            showNav: true,
            showFooter: true,
            component: Homepage
        },
        {
            path: "/",
            name: "Contact Us",
            visibility: true,
            showNav: true,
            showFooter: true,
            component: Homepage
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