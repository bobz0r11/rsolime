import { Link } from "react-router-dom";

import { paths } from 'constants/app-constants';


import './navbar.scss'

interface NavBarProps {
    id?: any,
    name?: String,
    iconName?: any,
    path?: any,
    onClick?(): void,
};

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <ul className="navbar__list">
                    {
                        paths.map(({ id, name, iconName, path, onClick }: NavBarProps) => {
                            const Icon = iconName;
                            return (
                                <li
                                    className="navbar__list__item"
                                    key={id}
                                    onClick={onClick}
                                >
                                    <div className="navbar__list__item--icon">
                                        {(iconName) ? <Icon /> : null}
                                    </div>
                                    <Link className="navbar__list__item--link" to={path}>{name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default NavBar;