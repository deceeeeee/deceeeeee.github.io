import Homepage from '../Container/Homepage/Homepage';
import ErrorPage from '../Container/ErrorPage/ErrorPage';
import ProjectsPage from '../Container/ProjectsPage/ProjectsPage';

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
            path: "/projects",
            name: "My Projects",
            visibility: true,
            showNav: true,
            showFooter: false,
            component: ProjectsPage,
            icon: ['fas', 'clipboard']
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