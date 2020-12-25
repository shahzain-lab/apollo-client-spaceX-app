import React from 'react';
///logo
import logo from '../../images/logo.png';
//css
import '../wrapper.css';




export const Header =()=> {
    return(
        <div className="Header">
          {/* ///logo */}
          <img src={logo} alt="" className="logo"/>

          {/* //section/ */}
          <section>
              {/* ///LEFT SIDE/// */}
            <div className="left-side">
                <h3><span>+1000</span> colonies</h3>
                <h3><span>+100</span> scientific laboratories</h3>
                <h3><span>+75</span> Hydroponics form</h3>
            </div>

                  {/* //RIGHT_SIDE//? */}
                  <div className="right-side">
              <h1 className="head">Road to the red palnet</h1>
                <p>spaceX design,Launches and manufactures adavanced<br /> rockets and spacecraft</p>
                    
                 <button className="right-btn">
                    view Launches
                   </button>   
    
                  </div>
          </section>
        </div>
    )
}