import Home from 'components/home';
import OurProduct from 'components/ourproduct';
import About from 'components/about';
import Contact from 'components/contact';

export const paths = [
    {
        id: 'home',
        path: '/',
        name: 'Home',
        component: Home,
        onClick: (): void => {
            const elem = document.querySelector('.home__box__container');
            elem?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        },
    },
    {
        id: 'ourproduct',
        path: '/ourproduct',
        name: 'Our Product',
        component: OurProduct,
    },
    {
        id: 'contact',
        path: '/contact',
        name: 'Contact',
        component: Contact,
        onClick: (): void => {
            const elem = document.querySelector('.footer');
            elem?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        },
    },
    {
        id: 'about',
        path: '/about',
        name: 'About',
        component: About,
        onClick: (): void => {
            const elem = document.querySelector('.footer');
            elem?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        },
    },
];
