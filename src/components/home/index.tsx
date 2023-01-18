import Box from 'components/box';
import './home.scss'

import { FcStackOfPhotos } from "react-icons/fc";

const Home = () => {
    const scrollTo1 = () => {
        const elem = document.querySelector('#point1');
        console.log('elem1', elem);
        elem?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };

    const scrollTo2 = () => {
        const elem = document.querySelector('#point2');
        console.log('elem2', elem);
        elem?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };

    return <>
        <div className="home">
            <div className="overlay"></div>
            <div id="point1" onClick={() => scrollTo2()}>pointpointpointpointpointpointpointpointpointpointpointpointpointpoint</div>
            <div className="home__box__container">
                <Box
                    title={'Service 1'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={FcStackOfPhotos}
                />
                <Box
                    title={'Service 2'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={FcStackOfPhotos}
                />
                <Box
                    title={'Service 3'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={FcStackOfPhotos}
                />
                <Box
                    title={'Service 4'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={FcStackOfPhotos}
                />
                <Box
                    title={'Service 5'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={FcStackOfPhotos}
                />
                <Box
                    title={'Service 6'}
                    message={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                    iconName={FcStackOfPhotos}
                />
            </div>
            <div id="point2" onClick={() => scrollTo1()}>pointpointpointpointpointpointpointpointpointpointpointpointpointpoint</div>
        </div>
    </>
}

export default Home;