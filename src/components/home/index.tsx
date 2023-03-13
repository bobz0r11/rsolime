import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { GiFertilizerBag } from "react-icons/gi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";

import Box from 'components/box';

import logo from 'images/logo.jpg';
import product from 'images/flacon.jpg';

import './home.scss'

const Home = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="home">
                <div className="overlay" />
                <div className="home__company-name">
                    <img className="home__company-name--img--logo" src={logo} alt="Logo" />
                    <img className="home__company-name--img--product" src={product} alt="Product" />
                </div>
                <div className="home__box__container">
                    <span id="scrollToHome" />
                    <Box
                        style={{ flexDirection: 'row' }}
                        classNames={'reveal fade-right box--end'}
                        title={`${t('domestic')}`}
                        message={`${t('box_domestic')}`}
                        iconName={BsHouse}
                        readMorePath={'/domestic'}
                    />
                    <Box
                        style={{ flexDirection: 'row-reverse' }}
                        classNames={'reveal fade-left box--start'}
                        title={`${t('fertile')}`}
                        message={`${t('box_industrial')}`}
                        iconName={GiFertilizerBag}
                        readMorePath={'/fertile'}
                    />
                    <Box
                        style={{ flexDirection: 'row' }}
                        classNames={'reveal fade-right box--end'}
                        title={`${t('horeca')}`}
                        message={`${t('box_horeca')}`}
                        iconName={IoRestaurantOutline}
                        readMorePath={'/horeca'}
                    />
                    <Box
                        style={{ flexDirection: 'row-reverse' }}
                        classNames={'reveal fade-left box--start'}
                        title={`${t('public_entities')}`}
                        message={`${t('box_public_entities')}`}
                        iconName={HiOutlineBuildingLibrary}
                        readMorePath={'/publicentities'}
                    />
                    <Box
                        style={{ flexDirection: 'row' }}
                        classNames={'reveal fade-right box--end'}
                        title={`${t('industrial')}`}
                        message={`${t('box_industrial')}`}
                        iconName={TbBuildingFactory2}
                        readMorePath={'/industrial'}
                    />
                </div>
            </div>
        </>
    );
}

export default Home;