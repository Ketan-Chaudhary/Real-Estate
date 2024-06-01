import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <section className="f-warrper">
    <div className="paddings innerWidth flexCenter f-container">
        {/* Left Footer */}
        <div className="flexColStart f-left">
            <img src="./logo2.png" alt="" width={120}/>
            <span className="secondaryText">
                Our Vision is to make all people the best place to live for them.
            </span>
        </div>

        {/* Right Footer */}
        <div className="flexColStart f-right">
            <span className='primaryText'>Information</span>
            <span className='secondaryText'>191 Noida , UP , India</span>
            <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Products</span>
                <span>About Us</span>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Footer