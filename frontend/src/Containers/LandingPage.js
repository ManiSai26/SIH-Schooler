import React from 'react';
import LandingBody from '../Components/LandingBody';
import LandingPageNavBar from '../Components/LandingPageNavBar';
import Footer from '../Components/footer';
const LandingPage = () => {
    return ( <div>
        <LandingPageNavBar/>
        <LandingBody/>
        <Footer/>
    </div> );
}
 
export default LandingPage;