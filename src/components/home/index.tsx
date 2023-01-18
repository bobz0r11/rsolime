import './home.scss'

import logo from 'images/soil7.jpg';

const Home = () => {
    const scroll = () => {
        const elem = document.querySelector('#point');
        console.log('elem', elem);
        elem?.scrollIntoView({ behavior: 'smooth', block: 'end'});
    };

    return <>
        <div className="home">
            <div className="overlay" onClick={() => scroll()}></div>
            <div id="point1">pointpointpointpointpointpointpointpointpointpointpointpointpointpoint</div>
            <div id="point2">pointpointpointpointpointpointpointpointpointpointpointpointpointpoint</div>
        </div>
    </>
}

export default Home;