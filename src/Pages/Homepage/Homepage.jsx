import React from 'react';
import Banner from '../../Components/homepage/Banner';
import Friends from '../Friends/Friends';
import MyFriends from '../../Components/homepage/MyFriends';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <MyFriends/>
        </div>
    );
};

export default Homepage;