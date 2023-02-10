import Home from 'components/home';
import OurProduct from 'components/ourproduct';
import About from 'components/about';
import Contact from 'components/contact';

import { CgShoppingBag, CgHome, CgInfo} from "react-icons/cg";
import { RiContactsBook2Line } from 'react-icons/ri';

const scrollTo = (elem: Element | null): void => {
    elem?.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

export const paths = [
    {
        id: 'home',
        path: '/',
        name: 'Home',
        component: Home,
        iconName: CgHome,
        onClick: (): void => {
            const elem = document.querySelector('.home__box__container');
            scrollTo(elem);
        },
    },
    {
        id: 'ourproduct',
        path: '/ourproduct',
        name: 'Our Product',
        component: OurProduct,
        iconName: CgShoppingBag,
        onClick: (): void => {
            const elem = document.querySelector('.our-product__content');
            scrollTo(elem);
        },
    },
    {
        id: 'contact',
        path: '/contact',
        name: 'Contact',
        component: Contact,
        iconName: RiContactsBook2Line,
        onClick: (): void => {
            const elem = document.querySelector('.footer');
            scrollTo(elem);
        },
    },
    {
        id: 'about',
        path: '/about',
        name: 'About',
        component: About,
        iconName: CgInfo,
        onClick: (): void => {
            const elem = document.querySelector('.footer');
            scrollTo(elem);
        },
    },
];
