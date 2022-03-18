import React from 'react';
import '../StyleSheets/LandingNavbar.css'
const LandingPageNavBar = () => {
    return ( 
        <div className='LnPNavBar'>
            <div className='LnPNavlogo'>
                <span>Schooler</span>
            </div>
            <div className='LnPNavLinks'>
                <div className='LnPNavLinkdiv'>
                    <a href='#'>Home</a>
                </div>
                <div className='LnPNavLinkdiv'>
                    <a href='#LBServices'>Services</a>
                </div>
                <div className='LnPNavLinkdiv'>
                    <a href='#LBAboutdiv'>About</a>
                </div>
                <div className='LnPNavLinkdiv'>
                    <a href='#LBContact'>Contact</a>
                </div>
            </div>
            <div className='LnPNavButtons'>
            <input type={'submit'} value='Login'/>
            <input type={'submit'} value='Signup'/>
            </div>
        </div>
     );
}
 
export default LandingPageNavBar;