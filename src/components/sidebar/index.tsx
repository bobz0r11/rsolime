import React from 'react';

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
    return (
        <React.Fragment>
            <div className="sidebar">
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
                                    >
                                        <div className="sidebar__list__item--icon">
                                            {iconName ? <Icon /> : null}
                                        </div>
                                        <div className="sidebar__list__item--text">
                                            {name}
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className="sidebar__separator"></div>
                    <div className="sidebar__social-media">
                        <span title="Facebook" className="sidebar__social-media--icon"> <FaFacebookSquare /> </span>
                        <span title="Instagram" className="sidebar__social-media--icon"> <FaInstagramSquare /> </span>
                        <span title="Twitter" className="sidebar__social-media--icon"> <FaTwitter /> </span>
                        <span title="YouTube" className="sidebar__social-media--icon"> <FaYoutube /> </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;