import React from 'react';

import { Link } from 'react-router-dom'

import { paths } from 'constants/app-constants';

import './sidebar.scss'

const Sidebar = () => {
    return (
        <React.Fragment>
            <div className="sidebar">
                <div className="container">
                    <ul className="sidebar__list">
                        {
                            paths.map(({ id, path, name }) => {
                                return (
                                    <li
                                        key={id}
                                        className="sidebar__list__item"
                                    >
                                        <Link to={path}> {name} </Link>
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