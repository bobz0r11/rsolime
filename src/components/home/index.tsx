import React from 'react';

import { Link } from 'react-router-dom'

import { paths } from 'constants/app-constants';

import './home.scss'

const Home = () => {
    return (
        <React.Fragment>
            <div className="sidebar">
                <div className="sidebar__list-container">
                    <ul>
                        {
                            paths.map(({ id, path, name }) => {
                                return (
                                    <li key={id}>
                                        <Link to={path}> {name} </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className="content">
                content
            </div>
        </React.Fragment>
    );
}

export default Home;