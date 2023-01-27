import React, { useRef, useState } from 'react';

import { paths } from 'constants/app-constants';

import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";

import './sidebar.scss'

interface SidebarProps {
    id?: any,
    name?: String,
    iconName?: any,
    onClick?(): void,
};

const Sidebar = () => {
    const sidebarRef: any = useRef();
    const itemsRef: any = useRef([]);

    const [isExpanded, setIsExpanded] = useState(false);

    const onMouseEnter = (): void => {
        const listItems = Array.from(document.getElementsByClassName('sidebar__list__item') as HTMLCollectionOf<HTMLElement>);

        const sidebar = sidebarRef.current;
        sidebar.style.left = '0';

        setIsExpanded(true);

        listItems.forEach(elem => elem.style.flexDirection = 'row');
    };

    const onMouseLeave = (): void => {
        const listItems = Array.from(document.getElementsByClassName('sidebar__list__item') as HTMLCollectionOf<HTMLElement>);

        const sidebar = sidebarRef.current;
        sidebar.style.left = '-115px';

        setIsExpanded(false);

        listItems.forEach(elem => elem.style.flexDirection = 'row-reverse');
    }

    return (
        <React.Fragment>
            <div
                className="sidebar"
                ref={sidebarRef}
                onMouseEnter={() => onMouseEnter()}
                onMouseLeave={() => onMouseLeave()}
            >
                <div className="sidebar__container">
                    <ul className="sidebar__list">
                        {
                            paths.map(({ id, name, iconName, onClick }: SidebarProps) => {
                                const Icon = iconName;
                                return (
                                    <li
                                        className="sidebar__list__item"
                                        key={id}
                                        onClick={onClick}
                                        ref={itemsRef}
                                    >
                                        <div className="sidebar__list__item--icon">
                                            {(iconName) ? <Icon /> : null}
                                        </div>
                                        {
                                            (isExpanded) ?
                                                (
                                                    <div className="sidebar__list__item--text">
                                                        {name}
                                                    </div>
                                                ) : null
                                        }
                                    </li>
                                );
                            })
                        }
                    </ul>
                    {
                        (isExpanded) ?
                            (
                                <>
                                    <div className="sidebar__separator"></div>
                                    <div className="sidebar__social-media">
                                        <span
                                            title="Facebook"
                                            className="sidebar__social-media--icon sidebar__social-media--icon--fb"
                                        >
                                            <FaFacebookSquare />
                                        </span>
                                        <span
                                            title="Instagram"
                                            className="sidebar__social-media--icon sidebar__social-media--icon--ig"
                                        >
                                            <FaInstagramSquare />
                                        </span>
                                        <span
                                            title="Twitter"
                                            className="sidebar__social-media--icon sidebar__social-media--icon--tw"
                                        >
                                            <FaTwitter />
                                        </span>
                                        <span
                                            title="YouTube"
                                            className="sidebar__social-media--icon sidebar__social-media--icon--yt"
                                        >
                                            <FaYoutube />
                                        </span>
                                    </div>
                                </>
                            ) : null
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;