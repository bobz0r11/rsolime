import Box from 'components/box';
import './home.scss'

import { GiPill, GiFactory, GiChicken } from "react-icons/gi";
import { TbPig } from "react-icons/tb";
import { VscPerson } from "react-icons/vsc";

const Home = () => {
    return (
        <div className="home">
            <div className="overlay"></div>
            <div className="home__box__container">
                <Box
                    title={'Domestico'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={TbPig}
                />
                <Box
                    title={'Fertile'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={VscPerson}
                />
                <Box
                    title={'Aziende agricole'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={GiPill}
                />
                <Box
                    title={'HORECA'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={GiFactory}
                />
                <Box
                    title={'Entita pubblici'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={GiChicken}
                />
                <Box
                    title={'Industriale'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={GiChicken}
                />
            </div>
        </div>
    );
}

export default Home;