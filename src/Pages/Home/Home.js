import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import MyServices from '../MyServices';
import Projsect from '../Projsect';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <MyServices></MyServices>
            <AboutMe></AboutMe>
            <Projsect></Projsect>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;