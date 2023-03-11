import Home from 'components/home';
import Chisiamo from 'components/chisiamo';
import Footer from 'components/footer';
import Philosophy from 'components/philosophy';

import { CgHome } from "react-icons/cg";
import { RiContactsBook2Line } from 'react-icons/ri';
import { MdPeopleOutline } from 'react-icons/md';
import { GiClassicalKnowledge } from 'react-icons/gi';

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
            const elem = document.querySelector('.home__company-name--img');
            scrollTo(elem);
        },
    },
    {
        id: 'philosophy',
        path: '/',
        name: 'Philosophy',
        component: Philosophy,
        iconName: GiClassicalKnowledge,
        onClick: (): void => {
            const elem = document.querySelector('#scrollToPhilosophy');
            scrollTo(elem);
        },
    },
    {
        id: 'chisiamo',
        path: '/',
        name: 'Chisiamo',
        component: Chisiamo,
        iconName: MdPeopleOutline,
        onClick: (): void => {
            const elem = document.querySelector('#scrollToChisiamo');
            scrollTo(elem);
        },
    },
    {
        id: 'contact',
        path: '/',
        name: 'Contact',
        component: Footer,
        iconName: RiContactsBook2Line,
        onClick: (): void => {
            const elem = document.querySelector('.footer');
            scrollTo(elem);
        },
    },
];
