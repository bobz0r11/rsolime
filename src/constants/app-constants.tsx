import Home from 'components/home';
import Portofolio from 'components/portofolio';
import About from 'components/about';
import Contact from 'components/contact';

export const paths = [
    {
        id: 'home',
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        id: 'portofolio',
        path: '/portofolio',
        name: 'Portofolio',
        component: Portofolio,
    },
    {
        id: 'contact',
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        id: 'about',
        path: '/about',
        name: 'About',
        component: About,
    },
];
