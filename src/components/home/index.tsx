import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { GiFertilizerBag } from "react-icons/gi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";

import Box from 'components/box';

import './home.scss'

const Home = () => {
    const { t } = useTranslation();

    console.log(t('Domestic'));

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="home">
                <div className="overlay" />
                <div className="home__company-name">
                    CIELO
                </div>
                <div className="home__box__container">
                    <Box
                        title={`${t('Domestic')}`}
                        message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                        iconName={BsHouse}
                        readMorePath={'/domestic'}
                    />
                    <Box
                        title={'Fertile'}
                        message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                        iconName={GiFertilizerBag}
                        readMorePath={'/fertile'}
                    />
                    <Box
                        title={'HORECA'}
                        message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                        iconName={IoRestaurantOutline}
                        readMorePath={'/horeca'}
                    />
                    <Box
                        title={'Public entities'}
                        message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                        iconName={HiOutlineBuildingLibrary}
                        readMorePath={'/publicentities'}
                    />
                    <Box
                        title={'Industrial'}
                        message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                        iconName={TbBuildingFactory2}
                        readMorePath={'/industrial'}
                    />
                </div>
            </div>
        </>
    );
}

export default Home;