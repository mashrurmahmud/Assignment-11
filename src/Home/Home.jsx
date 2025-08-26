import React from 'react';
import Banner from '../Banner';
import SencondContainer from '../SencondContainer';
import ThirdContainer from '../ThirdContainer';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            <section>
                <SencondContainer></SencondContainer>

            </section>
            <section>
                <ThirdContainer></ThirdContainer>
            </section>
            
        </div>
    );
};

export default Home;