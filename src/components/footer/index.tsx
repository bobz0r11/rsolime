import './footer.scss';

import { TbFlower } from "react-icons/tb";
import { BiPhoneCall } from "react-icons/bi";
import { GoMail, GoLocation } from "react-icons/go";
import { FaGooglePlusG, FaWhatsapp, FaFacebookSquare, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
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
                            Get in touch
                        </div>
                        <div className="footer__header--contact">
                            <span className="footer__header--contact--icon">
                                <BiPhoneCall />
                            </span>
                            <span className="footer__header--contact--text">
                                (+39) 333 177 3990
                            </span>
                        </div>
                        <div className="footer__header--contact">
                            <span className="footer__header--contact--icon">
                                <GoMail />
                            </span>
                            <span className="footer__header--contact--text">
                                rsolime@solime.it
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
                        <div className="footer__header--contact">
                            <div className="footer__header--contact--social-media">
                                <span className="footer__header--contact--social-media--fb" title="Facebook">
                                    <FaFacebookSquare />
                                </span>
                                <span className="footer__header--contact--social-media--ig" title="Instagram">
                                    <FaInstagramSquare />
                                </span>
                                <span className="footer__header--contact--social-media--tw" title="Twitter">
                                    <FaTwitter />
                                </span>
                                <span className="footer__header--contact--social-media--yt" title="YouTube">
                                    <FaYoutube />
                                </span>
                                <span className="footer__header--contact--social-media--wapp" title="Whatsapp">
                                    <FaWhatsapp />
                                </span>
                                <span className="footer__header--contact--social-media--gplus" title="Google+">
                                    <FaGooglePlusG />
                                </span>
                            </div>
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