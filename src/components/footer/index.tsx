import './footer.scss';

import { useTranslation } from 'react-i18next';

import { TbFlower } from "react-icons/tb";
import { BiPhoneCall } from "react-icons/bi";
import { GoMail, GoLocation } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__header">
                    <div className="footer__header__column">
                        <div className="footer__header--company">
                            <div className="footer__header--icon"> <TbFlower /> </div>
                            Cielo Vision
                        </div>
                        <div className="footer__header--text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </div>
                    </div>

                    <div className="footer__header__column">
                        <div className="footer__header--company">
                            {t('contact')}
                        </div>
                        <div className="footer__header--contact">
                            <span className="footer__header--contact--icon">
                                <BiPhoneCall />
                            </span>
                            <span className="footer__header--contact--text">
                                Roberto Solime - (+39) 333 177 3990
                            </span>
                        </div>
                        <div className="footer__header--contact">
                            <span className="footer__header--contact--icon">
                                <FaWhatsapp />
                            </span>
                            <span className="footer__header--contact--text">
                                Roberto Solime - (+39) 333 177 3990
                            </span>
                        </div>
                        <div className="footer__header--contact">
                            <span className="footer__header--contact--icon">
                                <GoMail />
                            </span>
                            <span className="footer__header--contact--text">
                                cielo.solime@gmail.com
                            </span>
                        </div>
                        <div className="footer__header--contact">
                            <span className="footer__header--contact--icon">
                                <GoLocation />
                            </span>
                            <span className="footer__header--contact--text">
                                CIELO SRL - Via T. Poletti 48 A 42025 Cavriago (RE)
                            </span>
                        </div>
                    </div>
                </div>

                <div className="footer__sub">
                    <div className="footer__sub__text">
                        Copyright © <span className="footer__sub__company">Cielo</span>. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;