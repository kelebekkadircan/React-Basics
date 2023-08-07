import Home from "./view/Home";
import Profile from "./view/Profile";
import About from "./view/About";


export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: false
    },
    {
        path: '/about',
        exact: true,
        component: About,
        auth: false
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
        auth: true
    }



]