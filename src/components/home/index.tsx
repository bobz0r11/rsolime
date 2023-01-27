import Box from 'components/box';
import './home.scss'

import { GiPill } from "react-icons/gi";

const Home = () => {
    return (
        <div className="home">
            <div className="overlay"></div>
            <div className="home__box__container">
                <Box
                    title={'Service 1'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={GiPill}
                />
                <Box
                    title={'Service 2'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={GiPill}
                />
                <Box
                    title={'Service 3'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={GiPill}
                />
                <Box
                    title={'Service 4'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={GiPill}
                />
                <Box
                    title={'Service 5'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={GiPill}
                />
            </div>
        </div>
    );
}

export default Home;