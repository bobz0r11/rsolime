import Box from 'components/box';

import { useTranslation } from 'react-i18next';

import { GiFarmTractor, GiFertilizerBag } from "react-icons/gi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

import './home.scss'


const Home = () => {
    const { t } = useTranslation();

    console.log(t('Domestic'));
    console.log(t('Welcome to React'));

    const reveal = () => {
        var reveals = document.querySelectorAll(".reveal");
    
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
    
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    
    window.addEventListener("scroll", () => reveal());

    return (
        <div className="home">
            <div className="overlay"></div>
            <div className="home__box__container">
                <Box
                    title={'Domestic'}
                    classNames="reveal fade-left"
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={BsHouse}
                />
                <Box
                    classNames="reveal fade-right"
                    title={'Fertile'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={GiFertilizerBag}
                />
                <Box
                    title={'Farms'}
                    classNames="reveal fade-left"
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={GiFarmTractor}
                />
                <Box
                    classNames="reveal fade-right"
                    title={'HORECA'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={IoRestaurantOutline}
                />
                <Box
                    title={'Public entities'}
                    classNames="reveal fade-left"
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={HiOutlineBuildingLibrary}
                />
                <Box
                    title={'Industrial'}
                    classNames="reveal fade-right"
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={TbBuildingFactory2}
                />
            </div>
        </div>
    );
}

export default Home;