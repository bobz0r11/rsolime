import Home from 'components/home';
import History from 'components/history';
import Contact from 'components/contact';
import Philosophy from 'components/philosophy';

import { CgHome } from "react-icons/cg";
import { RiContactsBook2Line } from 'react-icons/ri';
import { MdOutlineHistoryEdu } from 'react-icons/md';
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
            const elem = document.querySelector('.home__company-name--text');
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
        id: 'history',
        path: '/',
        name: 'History',
        component: History,
        iconName: MdOutlineHistoryEdu,
        onClick: (): void => {
            const elem = document.querySelector('#scrollToHistory');
            scrollTo(elem);
        },
    },
    {
        id: 'contact',
        path: '/',
        name: 'Contact',
        component: Contact,
        iconName: RiContactsBook2Line,
        onClick: (): void => {
            const elem = document.querySelector('.footer');
            scrollTo(elem);
        },
    },
];
