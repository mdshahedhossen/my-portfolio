import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import MyServices from '../MyServices';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <MyServices></MyServices>
            <AboutMe></AboutMe>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;