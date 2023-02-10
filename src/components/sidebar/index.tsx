import React, { useRef} from 'react';

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
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;