import './footer.scss';

import { GiMedicinePills } from "react-icons/gi";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__header">
                    <span className="footer__header--icon"> <GiMedicinePills /> </span>
                    <span className="footer__header--text">Roberto Solime</span>
                </div>

                <div className="footer__lists">
                    <ul className="footer__lists__list">
                        <li className="footer__lists__list--item">Product</li>
                        <li className="footer__lists__list--item">Benefits</li>
                        <li className="footer__lists__list--item">Partners</li>
                        <li className="footer__lists__list--item">Team</li>
                    </ul>

                    <ul className="footer__lists__list">
                        <li className="footer__lists__list--item">Documentation</li>
                        <li className="footer__lists__list--item">Support</li>
                        <li className="footer__lists__list--item">Legal Terms</li>
                        <li className="footer__lists__list--item">About</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;