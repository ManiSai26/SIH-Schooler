import React from 'react';
import { Link } from "react-router-dom";
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
            <div>
            {/* <input type={'submit'} value='Login' className='LnPNavButtons'/> */}
            <Link to='/login' className='LnPNavButtons'>Login</Link>
            <Link to='/signup' className='LnPNavButtons'>signup</Link>
            {/* <input type={'submit'} value='Signup' className='LnPNavButtons'/> */}
            </div>
        </div>
     );
}
 
export default LandingPageNavBar;