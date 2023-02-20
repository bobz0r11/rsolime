import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import classNames from 'classNames';

import { paths } from 'constants/app-constants';

import './navbar.scss'

interface NavBarProps {
    id?: any,
    iconName?: any,
    path?: any,
    onClick?(): void,
};

const NavBar = () => {
    const { i18n, t } = useTranslation();

    const isLangSelectedIt = 'it' === i18n.language;

    const changeLanguageTo = (lang: any): void => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="navbar">
            <div className="navbar__container">
                <ul className="navbar__list">
                    <div className="navbar__langselect">
                        <button
                            className={classNames('navbar__langselect--btn', {
                                'navbar__langselect--btn--active': isLangSelectedIt
                            })}
                            onClick={() => changeLanguageTo('it')}
                        >
                            IT
                        </button>
                        <button
                            className={classNames('navbar__langselect--btn', {
                                'navbar__langselect--btn--active': !isLangSelectedIt
                            })}
                            onClick={() => changeLanguageTo('en')}
                        >
                            EN
                        </button>
                    </div>
                    {
                        paths.map(({ id, iconName, path, onClick }: NavBarProps) => {
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
                                    <Link className="navbar__list__item--link" to={path}>{t(`${id}`)}</Link>
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