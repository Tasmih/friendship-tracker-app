import React from 'react';
import Banner from '../../Components/homepage/Banner';
import Friends from '../Friends/Friends';
import YourFriends from '../../Components/homepage/YourFriends';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <YourFriends/>
        </div>
    );
};

export default Homepage;