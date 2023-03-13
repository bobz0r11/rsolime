import Home from 'components/home';
import Chisiamo from 'components/chisiamo';
import Footer from 'components/footer';
import Philosophy from 'components/philosophy';

import { TfiShoppingCart } from "react-icons/tfi";
import { RiContactsBook2Line } from 'react-icons/ri';
import { MdPeopleOutline } from 'react-icons/md';
import { GiClassicalKnowledge } from 'react-icons/gi';

const scrollTo = (elem: Element | null): void => {
    elem?.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

export const paths = [
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
        id: 'products',
        path: '/',
        name: 'Prodotti',
        component: Home,
        iconName: TfiShoppingCart,
        onClick: (): void => {
            const elem = document.querySelector('#scrollToHome');
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
