import Home from 'components/home';
import History from 'components/history';
import Contact from 'components/contact';
import Philosophy from 'components/philosophy';

import { CgHome } from "react-icons/cg";
import { RiContactsBook2Line } from 'react-icons/ri';
import { MdOutlineMenuBook } from 'react-icons/md';
import { GiAtom } from 'react-icons/gi';

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
        id: 'philosophy',
        path: '/philosophy',
        name: 'Philosophy',
        component: Philosophy,
        iconName: GiAtom,
        onClick: (): void => {
            const elem = document.querySelector('.philosophy__content');
            scrollTo(elem);
        },
    },
    {
        id: 'history',
        path: '/history',
        name: 'History',
        component: History,
        iconName: MdOutlineMenuBook,
        onClick: (): void => {
            const elem = document.querySelector('.history__content');
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
];
