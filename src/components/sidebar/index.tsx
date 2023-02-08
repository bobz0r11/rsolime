import React, { useRef, useState } from 'react';

import { paths } from 'constants/app-constants';


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

    return (
        <React.Fragment>
            <div
                className="sidebar"
                ref={sidebarRef}
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
                                            (
                                                <div className="sidebar__list__item--text">
                                                    {name}
                                                </div>
                                            )
                                        }
                                    </li>
                                );
                            })
                        }
                    </ul>
                    {/* {
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
                        )
                    } */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;