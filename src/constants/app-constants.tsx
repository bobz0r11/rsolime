import Home from 'components/home';
import OurProduct from 'components/ourproduct';
import About from 'components/about';
import Contact from 'components/contact';

import { FaHome } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { RiContactsBookFill } from "react-icons/ri";
import { AiFillInfoCircle } from 'react-icons/ai';

const scrollTo = (elem: Element | null): void => {
    elem?.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

export const paths = [
    {
        id: 'home',
        path: '/',
        name: 'Home',
        component: Home,
        iconName: FaHome,
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
        iconName: BsFillHandbagFill,
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
        iconName: RiContactsBookFill,
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
        iconName: AiFillInfoCircle,
        onClick: (): void => {
            const elem = document.querySelector('.footer');
            scrollTo(elem);
        },
    },
];
